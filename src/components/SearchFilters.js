//Will have to fix later

<DropDownLi>
                       <Dropbtn onClick={() => this.handleClick("DropDown")}>
                                    Sort<SortIcon/>
                       </Dropbtn>
                       <DropDownContent>
                          {" "}
                          <SubA onClick={() => this.handleClick("Link1")}>Lowest Price</SubA>
                          <SubA onClick={() => this.handleClick("Link2")}>Most Purchased</SubA>
                          <SubA onClick={() => this.handleClick("Link3")}>Closest Expiration Date</SubA>
                          <SubA onClick={() => this.handleClick("Link4")}>Closest Distance</SubA>
                        </DropDownContent>
            </DropDownLi>
            <DropDownLi2>
                       <Dropbtn onClick={() => this.handleClick("DropDown")}>
                                    Filter<FilterListIcon/>
                       </Dropbtn>
                       <DropDownContent>
                          {" "}
                          <SubA onClick={() => this.handleClick("Link1")}>Meat</SubA>
                          <SubA onClick={() => this.handleClick("Link2")}>Seafood</SubA>
                          <SubA onClick={() => this.handleClick("Link3")}>Dairy</SubA>
                          <SubA onClick={() => this.handleClick("Link4")}>Vegetables</SubA>
                        </DropDownContent>
            </DropDownLi2>

            <PriceRange>
                <PriceP>Price</PriceP>
                <PriceInput placeholder="min" size="3"/>
                <PriceInput placeholder="max" size="3"/>
            </PriceRange>