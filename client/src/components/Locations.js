/**
 * This file creates the Table component in the Business
 * Dashboard, it allows the business user to look at results for the
 * locations
 *
 * Contributors: Jeet Vachhani, Darien
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
    }
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
                className={clsx(classes.tableCell, classes.flexContainer)}
                variant="body"
                style={{ height: rowHeight }}
                align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
                onClick={(e)=>alert(e)}
            >
                {cellData}
            </TableCell>
        ); //TODO: hook up listener
    };

    headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns, classes } = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer)}
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

export default function Locations(props) {

    let rows = props.data.locations;

    return (/** Dimensions and adding info into the table*/
        <Paper style={{ height: '75%', width: '56%',  position: 'absolute', left: '17%', top: '20%', background: "#eeeeee" }}>
            <VirtualizedTable
                data={props}
                rowCount={rows.length}
                rowGetter={({ index }) => rows[index]}
                columns={[
                    {
                        width: 450,
                        label: 'Location',
                        dataKey: 'location',
                    },
                    {
                        width: 600,
                        label: 'Address',
                        dataKey: 'address',

                    },
                ]}
            />
        </Paper>

    );
}