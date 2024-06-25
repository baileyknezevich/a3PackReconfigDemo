import { Grid, SidebarLayout, Input,Footer, Header, Radio,Icon,  Select,  Button,Notification } from '@mui/common';
import { DataTable } from '@mui/datatable';
import React from "react";
import '@mui/common/macys-backstage/theme.css';
import '@mui/datatable/default/theme.css';
import '@mui/datatable/default-compact/theme.css';
import '@mui/datatable/default-combined-all/theme.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { toggleTheme, ThemeType } from '@mui/common';
import {ReactToastify} from './Notifications'
import {getDepartments, getDeptData, submitData} from './iConstants';
// To set the view to light theme
toggleTheme(ThemeType.Light);

class ExampleGridContainer extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
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
            showCode:'table_hidden',
            status:'Desc',
            inputText : true,
            data:[],
            showData:[],
            changedData:[],
            loading: false,
            scrollBool:'75vh',
            totalItems: 0,
            itemsPerPage: 20,
            sortOrder: null,
            sortField: '',
            sortToggle:0,
            globalQuery:null,
            cellClicked: '',
            SubmitBool:null,
            timer:null
        }
        this.handleVirtualScroll = this.handleVirtualScroll.bind(this);
        this.handleSort = this.handleSort.bind(this);

    }
  
    
    UNSAFE_componentWillMount = async () => {
        
        const uniqueDept =[];
        this.state.loading=true;
        let dept =[];
        dept = await getDepartments();
        this.state.sortOptionsDept = [{'value':null,'text':'Department'}];
        dept.forEach(data => {
        if (uniqueDept.indexOf(data) === -1) {
            uniqueDept.push(data);
            this.state.sortOptionsDept.push({'value':data,'text':data+''});
        }
    });
    this.state.timer = setInterval( () => {this.checkTime()}, (60*1000));
    this.state.loading=false;
    this.forceUpdate()
    }

    checkTime(){
        const date = new Date();
        const showTime = date.getHours();        
        if(showTime === 4){
            alert('IMPORTANT. Any changes not submitted prior to 9PM will be lost.');
            clearInterval(this.state.timer);
        }
    }
    getHierarchy(){
        if(this.state.sortByDept != null){

        return(
        <span>
        <Select placeholder="MasterClass" label="MasterClass" value={this.state.sortByMC} options={this.state.sortOptionsMC} search={true} onChange={(data)=> this.setState({loading:true,sortByMC:  data, inputText: false}, () =>this.changeHierchy())}/>
        <Select placeholder="Class" label="Class" value={this.state.sortByClass} options={this.state.sortOptionsClass} search={true} onChange={(data)=> this.setState({loading:true,sortByClass:  data, inputText: false}, () =>this.changeHierchy())}/>
        <Select placeholder="PID" label="PID" value={this.state.sortByPID} options={this.state.sortOptionsPID} search={true} onChange={(data)=> this.setState({loading:true,sortByPID:  data, inputText: false}, () =>this.changeHierchy())}/>
        </span>
        )
    }
    }
    

    statusRendererDropDown =(cellData)=> {
       
        let name = cellData.rowData.pid + ' ' + cellData.rowData.colorNbr;
        return (
            <span>
                  <Radio
                    label={'Multi-Size Pack'}
                    name={name}
                    checked={ this.state.showData[cellData.rowIndex].packType.includes('Multi-Size Packs')}
                    onChange = {()=> this.editData( 'Multi-Size Packs',cellData )}
                />
                <Radio
                    label={'Single Size Multi-Of'}
                    name={name}
                    checked={this.state.showData[cellData.rowIndex].packType.includes("Multi-Of")  || this.state.showData[cellData.rowIndex].packType.includes('Eaches')}
                    onChange = { ()=> this.editData( 'Eaches',cellData)}
                />
            </span>
        );
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
                onKeyDown={ (evt) => (evt.key === 'e' || evt.key === 'E') && evt.preventDefault() } 
                />
        );
    }else if(cellData.value === null){
            return(
                <Icon root='common' name='badge-plus' size='medium' color='blue' />
            )
        }else{
        return (
            <p>{cellData.value}</p>
        )
    }
    
    }
    handleNotifications =()=>{

        switch(this.state.SubmitBool){
            case null:
                return(
                    <span></span>
                );
            case 0:
                    return(
                      <Notification
                      hasIcon={true}
                      severity='critical'
                      onDetailsClick={() => alert('error')}>
                        Failed to submit
                        </Notification>
                    );
                  
            case 1:
             
              return(
                <Notification
                severity='success'
                icon='success-icon'
                hasIcon={true}>
                  Submit Successful
                </Notification>
              );
            case 'i':
              
              return(
                <Notification 
                hasIcon={true} 
                severity='information'>
                All changes applied in this session (even ones not currently displayed on screen) will be submitted. Any changes not submitted prior to 9PM will be lost.
                </Notification>
              );
        }
      }

    handleSubmit = async() =>{
        this.state.SubmitBool = await submitData(this.state.changedData);
        this.forceUpdate();
    }

     handlePidColor =(cellData)=>{ 

        let value = cellData.data.packType;
        let clicked =this.state.cellClicked;
       
        if(clicked.toUpperCase() === "PACK TYPE "){
        if(value === "Multi-Of" ||value === 'Multi-Size Packs'){
           value = 'Eaches';;
        }else {
            value = 'Multi-Size Packs';
        }
       
         
        this.state.data.forEach(item =>{
           
            if(item.pid === cellData.data.pid && item.colorNbr === cellData.data.colorNbr){
                    item.packType = value;
                    this.setData(item);
             }

        })
        this.forceUpdate();
    }
    }


    handleRadio(group, value) {
        this.setState(({ status }) => {
            status = value;
            return status;
        });
    }

    handleVirtualScroll({ first, rows }) {
        const { sortOrder, sortField, totalItems } = this.state;
        let last = first + rows;
        if (first + rows > totalItems) {
            last = totalItems;
        }
        this.getData(first, last, sortOrder, sortField).then(({ items }) => {
            this.setState({ showData: items });
        });
    }

    handleSort({ sortOrder, sortField }) {
        if(this.state.sortToggle === -1){
            sortOrder = 0;
        }
       this.state.sortToggle = sortOrder;
        const { itemsPerPage } = this.state;
        this.getData(0, itemsPerPage, sortOrder, sortField).then(({ items }) => {
            this.setState({ showData: items, sortOrder, sortField });
        });
    }
    handleGlobalFilter(filter){
        this.state.globalQuery= filter;

        this.getData(0, 20).then(({ totalItems, items }) => {
            this.setState({ totalItems, showData: items });
        });
        this.forceUpdate();

    }

    changeHierchy(){

        this.getData(0, 20).then(({ totalItems, items }) => {
            this.setState({ totalItems, showData: items });
        });

    }

     editData =(newVal, cellData)=> {
        this.state.SubmitBool = 'i';
        const regex = new RegExp(/^\d+$/);
        if(cellData.field === "qtyPerPack" ){
            if(newVal != '' && !regex.test(newVal) ){
                newVal = cellData.value;
                console.log('Error');
            }

        }
        
        let index = this.state.data.indexOf(cellData.rowData)
        const data = this.state.data;
        data[index][cellData.field] = newVal;
        this.setData( data[index]);
        this.setState({ data: data });
    }

        setData = (item) =>{
        const d = this.state.changedData;
        let count = 0;
        d.forEach(data =>{
           if(data.masterclassNbr === item.masterclassNbr && data.deptNbr === item.deptNbr 
            && item.pid ===data.pid && data.classNbr === item.classNbr && data.colorNbr === item.colorNbr && data.sizeCode === item.sizeCode ){
            let index = d.indexOf(data)
            this.state.changedData[index] = item;
            count++;
           }
        });
         if(count === 0){
            const x = this.state.data.filter((a) => ((a.pid === item.pid) && (a.colorNbr === item.colorNbr) ));
            x.forEach(data =>{
            this.state.changedData.push({
            'wlpsKey':data.wlpsKey,
            'lineSequence':data.lineSequence,   
            'deptNbr':data.deptNbr, 
            'masterclassNbr':data.masterclassNbr,
            'classNbr':data.classNbr, 
            'pid':data.pid,
             'colorNbr': data.colorNbr, 
             'colorDesc':data.colorDesc,
             'sizeCode': data.sizeCode,
             'sizeDesc':data.sizeDesc, 
             'packId':data.packId,
             'nbrPacks':data.nbrPacks,
             'qtyPerPack': data.qtyPerPack, 
             'availQty':data.availQty,
             'onOrderBalance': data.onOrderBalance,
             'retailPrice':data.retailPrice,
             'poLineComments':data.poLineComments,
             'upc':data.upc,
             'packType': data.packType })
            });
         }
        console.log(this.state.changedData);
    }

    correctData  = async (dept) =>{
        
        
        this.state.data = await getDeptData(dept);

      console.log(this.state.data)
        this.state.data.sort((a, b) => {
            const nameA = a.pid.toUpperCase(); // ignore upper and lowercase
            const nameB = b.pid.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });    
          this.state.data.sort((a, b) => a.class - b.class);
          this.state.data.sort((a, b) => a.masterclassNbr - b.masterclassNbr);
      
        const d = this.state.changedData.filter((item) => ((item.deptNbr === this.state.sortByDept) ));
        if(d.length > 0 ){
            d.forEach(data =>{
                let Index = this.state.data.findIndex((item) => data.masterclassNbr === item.masterclassNbr && item.pid ===data.pid && data.dept === item.dept  
                && data.classNbr === item.classNbr && data.colorNbr === item.colorNbr && data.sizeCode === item.sizeCode )
                if(Index > -1){
                    this.state.data[Index].qtyPerPack = data.qtyPerPack;
                     this.state.data[Index].packType = data.packType;
                }
            })
        }

        this.getData(0, 20).then(({ totalItems, items }) => {
            this.setState({ totalItems, showData: items });
        });

    }

    getData(first, last, sortOrder, sortField) {
        return new Promise((resolve, reject) => {
            let uniqueMC =[];
            let uniqueClass =[];
            let uniquePID =[];
            let items = [...this.state.data];
            

            items= [...this.state.data.filter((item) => ((item.availQty != 0 ) ))];

           
            if(this.state.sortByMC != null){
                items= [...this.state.data.filter((item) => ((item.masterclassNbr === this.state.sortByMC ) ))];
                }
                if(this.state.sortByClass != null){
                    items = [...this.state.data.filter((item) => ((item.classNbr === this.state.sortByClass ) ))];
                    }
                    if(this.state.sortByPID != null){

                        items = [...this.state.data.filter((item) => ((item.pid === this.state.sortByPID ) ))];
                        }
                        if(this.state.globalQuery != null){
                            console.log(this.state.globalQuery)
                            items =  items.filter(entry => Object.values(entry).some(val => (typeof val === "string" && val.toUpperCase().includes(this.state.globalQuery.toUpperCase())) ||  (typeof val === "number" && val.toString().includes(this.state.globalQuery)) ));
                        }
                        this.state.sortOptionsMC = [{'value':null,'text':'MasterClass'}];
                        this.state.sortOptionsClass = [{'value':null,'text':'Class'}];
                        this.state.sortOptionsPID =[{'value':null,'text':'PID'}];

                        items.map(data => {
                            if ( uniqueMC.indexOf(data.masterclassNbr) === -1) {
                                uniqueMC.push(data.masterclassNbr);
                                this.state.sortOptionsMC.push({'value':data.masterclassNbr,'text':data.masterclassNbr +' - ' +data.masterclassDesc});
                            }
                            if (uniqueClass.indexOf(data.classNbr) === -1) {
                                uniqueClass.push(data.classNbr);
                                this.state.sortOptionsClass.push({'value':data.classNbr,'text':data.classNbr+' - '+data.classDesc});
                            }
                            if (uniquePID.indexOf(data.pid) === -1) {
                                uniquePID.push(data.pid);
                                this.state.sortOptionsPID.push({'value':data.pid,'text':data.pid +' : '+ data.pidDesc});
                            }
                            
                        });

                        if (sortOrder === -1) {
                            items.sort((a, b) => {
                                const nameA = a[sortField] // ignore upper and lowercase
                                const nameB = b[sortField]// ignore upper and lowercase
                                if (nameA < nameB) {
                                  return -1;
                                }
                                if (nameA > nameB) {
                                  return 1;
                                }
                                // names must be equal
                                return 0;
                              });   
                        }
                        if (sortOrder === 1) {
                            items.sort((a, b) => {
                                const nameA = a[sortField] // ignore upper and lowercase
                                const nameB = b[sortField]// ignore upper and lowercase
                                if (nameA > nameB) {
                                  return -1;
                                }
                                if (nameA < nameB) {
                                  return 1;
                                }
                                // names must be equal
                                return 0;
                              });   
                        }

                        let length = items.length;

            setTimeout(function () {
                resolve({
                    items: items.slice(first, last),
                    totalItems: length
                });
            }, 300);

            this.state.loading = false;
            this.state.inputText = true;
           this.forceUpdate();
        });
    }

    
    render() {
        const { sortOptionsDept, sortByDept} = this.state;
        const HeaderBar = DataTable.HeaderBar;
        const FilterPanel = HeaderBar.FilterPanel;
        let boolSort = false;
        let {showCode, showDesc} = this.state;
        let desc = ' DESC';
        let radioGroup = 'status';

        

        if(sortByDept != null){
            boolSort = true;

            if(this.state.totalItems <= 9){
                this.state.itemsPerPage = this.state.totalItems;
                this.state.scrollBool = 'none';
                boolSort =false;
                
            }else{
                this.state.itemsPerPage = 20;
                this.state.scrollBool = '75vh';
                boolSort =true;
            }
            
        }

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
                                    <Select placeholder="Departments" label="Departments" search={true} value={sortByDept} options={sortOptionsDept}
                                     onChange={(dept)=> this.setState({sortByDept:  dept, sortByMC : null, sortByClass: null, sortByPID: null, inputText: false, loading:true},
                                     () =>this.correctData(dept))}/>
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
                                data={this.state.showData}
                                onRowDoubleClick ={(cellData) => this.handlePidColor(cellData)}
                                onCellClick={(cellData)=> this.state.cellClicked=cellData.name}
                                scrollWidth='95vw' 
                                scrollHeight={this.state.scrollBool}
                                scrollable ={true}
                                reorderableColumns={true}
                                resizableColumns={true}
                                search={true}
                                searchPlaceholder='Search'
                                loading={this.state.loading}
                                columnResizeMode='expand'
                                className='table'
                                lazy={true}
                                rows={this.state.itemsPerPage}
                                totalRecords={this.state.totalItems}
                                virtualScroll={true}
                                onVirtualScroll={this.handleVirtualScroll}
                                onSort={this.handleSort}
                                virtualRowHeight={30}
                                onGlobalFilter={(value)=>this.handleGlobalFilter(value)}>
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
                                onClick={() => alert(`Multi-Size Packs should be selected when you want to allocate multiple sizes in a group together.  For example: if you want to allocate in packs of 4 (1 small/2 med/1 large) to a location. \n \n  You do not have to enter values for every size.  Any sizes that do not have a New Pack entered will by default either retain the original Single Size Multi-Of or if it was previously part of a Multi-Size Pack it will be uploaded to a3 with a value of 1. \n \n Single Size Multi-Of should be selected when you want to allocate each size separately.  For example: if you want to allocate only size small in increments of 2 to a location, select "Single Size Multi-Of" and enter a 2 in the New Pack field.`)}
                                />
                                </DataTable.HeaderBar>
                  
                                <DataTable.Column field='deptNbr' header='Dept' initialWidth=' 125px' sortable={boolSort} />
                                <DataTable.Column field='masterclassNbr' header='MasterClass'  sortable={boolSort} className={showCode +''}/>
                                <DataTable.Column field='masterclassDesc' header={'MasterClass'+ desc} sortable={boolSort} className={showDesc +''}/>
                                <DataTable.Column field='classNbr'  header='Class' sortable={boolSort}   className={showCode +''}/>
                                <DataTable.Column field='classDesc' header={'Class'+ desc}  sortable={boolSort} className={showDesc +''} />
                                <DataTable.Column field='pid' header='PID'  sortable={boolSort} className={showCode +''}/>
                                <DataTable.Column field='pidDesc' header={'PID'+ desc}  sortable={boolSort} className={showDesc +''}  />
                                <DataTable.Column field='colorNbr' header='Color'  sortable={boolSort} className={showCode +''}/>
                                <DataTable.Column field='colorDesc' header={'Color'+ desc}  sortable={boolSort} className={showDesc +''} />
                                <DataTable.Column field='availQty' initialWidth=' 125px' header='OnHand' sortable={boolSort} />
                                <DataTable.Column field='currentPack' initialWidth=' 175px' header='Current Pack' sortable={boolSort} />
                                <DataTable.Column field='sizeCode' header='Size'  sortable={boolSort} className={showCode +''}/>
                                <DataTable.Column field='sizeDesc' header={'Size'+ desc}  sortable={boolSort} className={showDesc +''} />

                                <DataTable.Column field='qtyPerPack' header='New Pack'   rowHeader={true} initialWidth=' 200px' renderer={this.statusRenderer}/>
                                <DataTable.Column field='packType' header='Pack Type ' initialWidth=' 470px'  rowHeader={true}   renderer={this.statusRendererDropDown}  />
                     
                                </DataTable>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={12} >
                                <div className='submitGroup'>
                                <Button type="primary" actionType="submit" onClick={ () => this.handleSubmit()} >Submit</Button>
                                {this.handleNotifications(this.state.SubmitBool)}
                                </div>
                                <ReactToastify.ToastContainer
                                hideProgressBar={true}
                                closeOnClick={false}
                                closeButton={false}
                                newestOnTop={true}
                                autoClose={5000}
                                position='bottom-right'
                                toastClassName='toast-notification-wrap'
                                />
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
