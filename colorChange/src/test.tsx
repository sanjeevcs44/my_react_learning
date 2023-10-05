const CashbackForm = (props:SampleForm)=>{
    const partnerAgencyData = useSelector((state:any)=>state.partnerAgency);
    const {partnerAgencyList} = partnerAgencyData;
    const {sampleAction,handleCancel,handleOk,campaignView} = props;
    const value = useContext(formikContext);
    const {values}= value;
    const isDisabled = values.status ==="PUBLISHED"||campaignView ==="detailsView";
    const formItemLayout = {
        wrapperCol : {span:23}
    } 

    return(
        <Formik
        initialValues = {sampalAction==="edit"?addedIncetive : contestIncetiveIntialValues}
        onSubmit={(_,actions)=>{
            actions.setSubmitting(false)
        }}
    )
}