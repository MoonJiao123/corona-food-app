/**
 * This file creates the Table component in the Business
 * Dashboard, it allows the business user to look at results for the
 * locations
 *
 * Contributors: Jeet Vachhani
 */


import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';

/**  Styles for the Location Table*/
const styles = (theme) => ({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',

    },
    table: {
        '& .ReactVirtualized__Table__headerRow': {
            flip: false,
            paddingRight: theme.direction === 'rtl' ? '0px !important' : undefined,
        },
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[180],
        },
    },
    tableCell: {
        flex: 1,
    },
    noClick: {
        cursor: 'initial',
    },
});

/**  Class which alllows table to be virtual and movable, and able to add ad many items as needed */
class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = { /**  Dimensions for the object*/
        headerHeight: 48,
        rowHeight: 48,
    };
    getRowClassName = ({ index }) => {
        const { classes, onRowClick } = this.props;
        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };
    cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, classes, rowHeight, onRowClick } = this.props;
        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{ height: rowHeight }}
                align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
            >
                {cellData}
            </TableCell>
        );
    };

    headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns, classes } = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
                variant="head"
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    render() {
        const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight}
                        gridStyle={{
                            direction: 'inherit',
                        }}
                        headerHeight={headerHeight}
                        className={classes.table}
                        {...tableProps}
                        rowClassName={this.getRowClassName}
                    >
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={(headerProps) =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    className={classes.flexContainer}
                                    cellRenderer={this.cellRenderer}
                                    dataKey={dataKey}
                                    {...other}
                                />
                            );
                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

/** Sample Data*/
const sample = [
    ['Location 1', '9927 Alderwood Lane\n' +
    'Conway, SC 29526'],
    ['Location 2', '332 Marvon St.\n' +
    'Loveland, OH 45140'],
    ['Location 3', '7380 Sherman Court\n' +
    'Alexandria, VA 22304'],
    ['Location 4', '332 Marvon St.\n' +
    'Loveland, OH 45140'],
    ['Location 5', '366 Wild Horse Drive\n' +
    'Lansing, MI 48910'],
    ['Location 6', '1 Creek Ave.\n' +
    'Lebanon, PA 17042'],
    ['Location 7', '92 Theatre Ave.\n' +
    'Southaven, MS 38671'],
    ['Location 8', '7441 W. Shadow Ave.\n' +
    'Moines, IA 502650'],
    ['Location 9', '716 Meadowbrook Street\n' +
    'Mishawaka, IN 46544'],

];

/** Create Data*/
function createData(id, location, address) {
    return { id, location, address };
}

const rows = [];
/** Insert data into the array*/
for (let i = 0; i < 9; i = i + 1) {
    const selection = sample[i];
    rows.push(createData(i, ...selection));
}

export default function Locations() {
    return (/** Dimensions and adding info into the table*/
        <Paper style={{ height: 400, width: 600,  position: 'absolute', left: '24%', top: '30%', background: "#eeeeee" }}>
            <VirtualizedTable
                rowCount={rows.length}
                rowGetter={({ index }) => rows[index]}
                columns={[
                    {
                        width: 600,
                        label: 'Location',
                        dataKey: 'location',
                    },
                    {
                        width: 300,
                        label: 'Address',
                        dataKey: 'address',

                    },
                ]}
            />
        </Paper>

    );
}