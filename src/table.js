import {Checkbox, Grid, Card, SidebarLayout, Input,Footer, Header, Radio,Icon,  Select, Table, Badge, Button } from '@mui/common';
import { DataTable } from '@mui/datatable';
import React from "react";
import '@mui/common/macys-backstage/theme.css';
import '@mui/datatable/default/theme.css';
import '@mui/datatable/default-compact/theme.css';
import '@mui/datatable/default-combined-all/theme.css';
import './App.css';
import { useEffect } from 'react';
import { toggleTheme, ThemeType } from '@mui/common';

import {getDepartments, getData, submitData} from './iConstants';
// To set the view to light theme
toggleTheme(ThemeType.Light);

class ExampleGridContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOrder: null,
            sortField: '',
            sortByDept: null,
            sortByMC: null,
            sortByClass: null,
            sortByPID: null,
            sortOptionsDept:[],
            sortOptionsMC:[],
            sortOptionsClass:[],
            sortOptionsPID:[],
            showDesc:'table_show',
            showCode:'table_show',
            status:'Both',
            inputText : false,
            data:[],
            changedData:[]
        }

    }
  
    
    UNSAFE_componentWillMount() {
        const uniqueDept =[];
        const dept = getDepartments();
        this.state.sortOptionsDept = [{'value':null,'text':'Department'}];
        dept.map(data => {
        if (uniqueDept.indexOf(data.dept) === -1) {
            uniqueDept.push(data.dept);
            this.state.sortOptionsDept.push({'value':data.dept,'text':data.dept+''});
        }
    });
    }
    setData = (item) =>{
        const d = this.state.changedData;
        let count = 0;
        d.forEach(data =>{
           if(data.Z_OPEN_70 === item.Z_OPEN_70 && data.dept === item.dept && item.STYLE_MASTER_SKU ===data.STYLE_MASTER_SKU && data.CLASS_NBR === item.CLASS_NBR && data.COLOR_NBR === item.COLOR_NBR && data.SIZE_NBR === item.SIZE_NBR && item.ON_HAND_TOTAL === data.ON_HAND_TOTAL){
            let index = d.indexOf(data)
            this.state.changedData[index] = item;
            count++;
           }
        });
         if(count === 0){
            this.state.changedData.push(item)
         }
        console.log(this.state.changedData);
    }

    correctData (){
        const d = this.state.changedData;
        if(d.length > 0 ){
            d.forEach(data =>{
                let Index = this.state.data.findIndex((item) => data.Z_OPEN_70 === item.Z_OPEN_70 && item.STYLE_MASTER_SKU ===data.STYLE_MASTER_SKU && data.dept === item.dept  && data.CLASS_NBR === item.CLASS_NBR && data.COLOR_NBR === item.COLOR_NBR && data.SIZE_NBR === item.SIZE_NBR && item.ON_HAND_TOTAL === data.ON_HAND_TOTAL)
                if(Index > -1){
                    this.state.data[Index].QTY_PER_PACK = data.QTY_PER_PACK;
                     this.state.data[Index].Z_OPEN_48 = data.Z_OPEN_48;
                }
            })
        }
    }


    

    getHierarchy(){
        if(this.state.sortByDept != null){

        return(
        <span>
        <Select placeholder="MasterClass" label="MasterClass" value={this.state.sortByMC} options={this.state.sortOptionsMC} search={true} onChange={(data)=> this.setState({sortByMC:  data, inputText: false})}/>
        <Select placeholder="Class" label="Class" value={this.state.sortByClass} options={this.state.sortOptionsClass} search={true} onChange={(data)=> this.setState({sortByClass:  data, inputText: false})}/>
        <Select placeholder="PID" label="PID" value={this.state.sortByPID} options={this.state.sortOptionsPID} search={true} onChange={(data)=> this.setState({sortByPID:  data, inputText: false})}/>
        </span>
        )
    }
    }

     editData =(newVal, cellData)=> {
      
        
        let index = this.state.data.indexOf(cellData.rowData)
        const data = this.state.data;
        data[index][cellData.field] = newVal;
        this.setData( data[index]);
        this.setState({ data: data });
    }

     statusRenderer  = (cellData) => {
        let value = cellData.value;
        if(this.state.inputText ==true){
        return (
               
               <Input 
               placeholder={cellData.value} 
               value ={cellData.value} 
               uncontrolled={true}
               fieldWidth='150px' 
               min='0'
                type='number'  
                onChange={(e)=>this.editData(e, cellData) }
                onBlur={() => this.state.inputText = false}/>
        );
    }else{
        return (
            <p>{cellData.value}</p>
        )
    }
    }


    handleRadio(group, value) {
        this.setState(({ status }) => {
            status = value;
            return status;
        });
    }
    
    render() {
        const { sortOptionsDept, sortByDept, sortByMC, sortByClass, sortByPID} = this.state;
        const HeaderBar = DataTable.HeaderBar;
        const FilterPanel = HeaderBar.FilterPanel;
        let boolSort = false;
        let {showCode, showDesc} = this.state;
        let desc = ' DESC';
        let radioGroup = 'status';
        let sortedData = [];
        let uniqueMC =[];
        let uniqueClass =[];
        let uniquePID =[];

        if(sortByDept != null){
            boolSort = true;
            this.state.sortOptionsMC = [{'value':null,'text':'Master Class'}];
            this.state.sortOptionsClass = [{'value':null,'text':'Class'}];
            this.state.sortOptionsPID =[{'value':null,'text':'PID'}];
            sortedData = this.state.data.filter((item) => ((item.dept === this.state.sortByDept) ));
            if(sortByMC != null){
            sortedData = this.state.data.filter((item) => ((item.Z_OPEN_70 === this.state.sortByMC && item.dept === this.state.sortByDept) ));
            }
            if(sortByClass != null){
                sortedData = this.state.data.filter((item) => ((item.CLASS_NBR === this.state.sortByClass && item.dept === this.state.sortByDept) ));
                }
                if(sortByPID != null){
                    sortedData = this.state.data.filter((item) => ((item.STYLE_MASTER_SKU === this.state.sortByPID && item.dept === this.state.sortByDept) ));
                    }

                    sortedData.sort((a, b) => {
                        const nameA = a.STYLE_MASTER_SKU.toUpperCase(); // ignore upper and lowercase
                        const nameB = b.STYLE_MASTER_SKU.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                          return -1;
                        }
                        if (nameA > nameB) {
                          return 1;
                        }
                        // names must be equal
                        return 0;
                      });    
                      sortedData.sort((a, b) => a.class - b.class);
                      sortedData.sort((a, b) => a.Z_OPEN_70 - b.Z_OPEN_70);
        }
       
       sortedData.map(data => {
            if ( uniqueMC.indexOf(data.Z_OPEN_70) === -1) {
                uniqueMC.push(data.Z_OPEN_70);
                this.state.sortOptionsMC.push({'value':data.Z_OPEN_70,'text':data.Z_OPEN_70 +' - ' +data.Z_OPEN_71});
            }
            if (uniqueClass.indexOf(data.CLASS_NBR) === -1) {
                uniqueClass.push(data.CLASS_NBR);
                this.state.sortOptionsClass.push({'value':data.CLASS_NBR,'text':data.CLASS_NBR+' - '+data.CLASS_NAME});
            }
            if (uniquePID.indexOf(data.STYLE_MASTER_SKU) === -1) {
                uniquePID.push(data.STYLE_MASTER_SKU);
                this.state.sortOptionsPID.push({'value':data.STYLE_MASTER_SKU,'text':data.STYLE_MASTER_SKU +' : '+ data.PRODUCT_NAME});
            }
            
        });

        if(this.state.status === 'Both'){
            showCode = 'table_show';
            showDesc = 'table_show';
            desc = ' DESC';
        }
        if(this.state.status === 'Desc'){
            showCode = 'table_hidden';
            showDesc = 'table_show';
            desc = '';
        }
        if(this.state.status === 'Codes'){
            showCode = 'table_show';
            showDesc = 'table_hidden';
            desc = '';
        }


    let statusRendererDropDown =(cellData)=> {
       
        let name = cellData.rowData.STYLE_MASTER_SKU + ' ' + cellData.rowData.COLOR_NBR;
       
        return (
            <span>

                  <Radio
                    label={'Multi'}
                    name={name}
                    checked={sortedData[cellData.rowIndex].Z_OPEN_48.includes("Multi-Of")}
                    onChange = {()=> handlePidColor(cellData, 'Multi-Of' || 'Multi-Size Packs')}
                />
                <Radio
                    label={'Eaches'}
                    name={name}
                    checked={sortedData[cellData.rowIndex].Z_OPEN_48.includes('Eaches')}
                    onChange = { ()=> handlePidColor(cellData, 'Eaches')}
                    
                />
            
            </span>
        );
    
    }

    let handlePidColor =(cellData,value)=>{ 
        
       this.state.data.forEach(item =>{
            if(item.STYLE_MASTER_SKU === cellData.rowData.STYLE_MASTER_SKU && item.COLOR_NBR === cellData.rowData.COLOR_NBR){
                    item.Z_OPEN_48 = value;
                    this.setData(item);
             }

        })
    }
  
        return (
            <section className="page-example-wrap new-test">
                <Header title="a3 Packaway Pack Reconfiguration Tool" onMenuToggle={(open) => this.setState({ sidebarCollapsed: !open })}>
                </Header>
                <SidebarLayout  className="example-sidebar"   >
            
                    <SidebarLayout.Content>
                        <Grid className="main-body">
                            <Grid.Row>
                                <Grid.Column width={12}>
                                   
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={12} className="align-right">
                                    <Select placeholder="Departments" label="Departments" search={true} value={sortByDept} options={sortOptionsDept} onChange={(dept)=> this.setState({sortByDept:  dept, sortByMC : null, sortByClass: null, sortByPID: null, inputText: false, data: getData(dept)},() =>this.correctData())}/>
                                    {this.getHierarchy()}
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={12}>
                                   
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={12}>
                                <DataTable
                                onEdit={(newData, cellData) => this.editData(newData, cellData)}
                                data={sortedData}
                                onRowDoubleClick ={() => alert(`Apply these changes to all rows at a PID/COLOR Level?`)}
                                onCellClick={()=> this.setState({inputText: true})}
                                scrollWidth='95vw' 
                                scrollHeight ='70vh'
                                scrollable ={true}
                                reorderableColumns={true}
                                resizableColumns={true}
                                search={true}
                                columnResizeMode='expand'>
                                <DataTable.HeaderBar>
                                <HeaderBar.FilterPanel>
                            <FilterPanel.Section label='Descriptions'>
                            <FilterPanel.ToggleItem
                                type='radio'
                                name={radioGroup}
                                label='Only Descriptions'
                                active={this.state.status === 'Desc'}
                                onChange={() => this.setState({status: 'Desc'})}
                            />
                            <FilterPanel.ToggleItem
                                type='radio'
                                name={radioGroup}
                                label='Only Codes'
                                active={this.state.status === 'Codes'}
                                onChange={() => this.setState({status: 'Codes'})}
                            />
                            <FilterPanel.ToggleItem
                                type='radio'
                                name={radioGroup}
                                label='Both'
                                active={this.state.status === 'Both'}
                                onChange={() => this.setState({status: 'Both'})}
                            />
                            </FilterPanel.Section>
                            </HeaderBar.FilterPanel>
                                <DataTable.HeaderBar.Item
                                iconSize='small'
                                icon='badge-help'
                                onClick={() => alert(`information that is helpful`)}
                                />
                                </DataTable.HeaderBar>
                  
                                <DataTable.Column field='dept' header='Dept' initialWidth=' 125px' sortable={boolSort} />
                                <DataTable.Column field='Z_OPEN_70' header='MasterClass' initialWidth=' 125px' sortable={boolSort} className={showCode +''}/>
                                <DataTable.Column field='Z_OPEN_71' header={'MasterClass'+ desc}initialWidth=' 200px' sortable={boolSort} className={showDesc +''}/>
                                <DataTable.Column field='CLASS_NBR' initialWidth=' 125px' header='Class' sortable={boolSort}   className={showCode +''}/>
                                <DataTable.Column field='CLASS_NAME' header={'Class'+ desc} initialWidth=' 200px' sortable={boolSort} className={showDesc +''} />
                                <DataTable.Column field='STYLE_MASTER_SKU' header='PID' initialWidth=' 200px' sortable={boolSort} className={showCode +''}/>
                                <DataTable.Column field='PRODUCT_NAME' header={'PID'+ desc} initialWidth=' 200px' sortable={boolSort} className={showDesc +''}  />
                                <DataTable.Column field='COLOR_NBR' header='Color' initialWidth=' 125px' sortable={boolSort} className={showCode +''}/>
                                <DataTable.Column field='COLOR_NAME' header={'Color'+ desc} initialWidth=' 125px' sortable={boolSort} className={showDesc +''} />
                                <DataTable.Column field='ON_HAND_TOTAL' header='OnHand' initialWidth='125px' sortable={boolSort} />
                                <DataTable.Column field='current_pack' header='Current Pack' initialWidth='200px' sortable={boolSort} />
                                <DataTable.Column field='SIZE_NBR' header='Size' initialWidth=' 150px' sortable={boolSort} className={showCode +''}/>
                                <DataTable.Column field='SIZE_NAME' header={'Size'+ desc} initialWidth='150px' sortable={boolSort} className={showDesc +''} />

                                <DataTable.Column field='QTY_PER_PACK' header='New Pack'     rowHeader={true} initialWidth=' 200px' renderer={this.statusRenderer}/>

                                <DataTable.Column field='Z_OPEN_48' header='Pack Type ' initialWidth=' 300px'  rowHeader={true}   renderer={statusRendererDropDown}  />
                     
                                </DataTable>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={1} className="align-right">
                                <Button type="primary" actionType="submit" onClick={ () => submitData(this.state.changedData)} >Submit</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </SidebarLayout.Content>
                </SidebarLayout>
                <Footer>
                    <Footer.Item href="#">Terms & Conditions</Footer.Item>
                    <Footer.Item href="#">Privacy Policy</Footer.Item>    
                </Footer>
            </section>

            
        )
    }


}

export default ExampleGridContainer; 
