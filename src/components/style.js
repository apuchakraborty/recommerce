import {makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        margin: '5px'
    },
    media: {
        height: 0,
        paddingTop: '100%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
   
    CardContent:{
        display: 'flex',
        justifyContent: 'space-between',

    },
    CardDescriptin : {
        textAlign: 'left'
    },

    appBar: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    app__productList :{
        paddingTop: '50px',
    },

    app__banner: {
        paddingTop: '30px',
        paddingBottom: '30px',

    },
    app__quantitybtn:{
        display:'flex'
    },
    app_checkout:{
        display: 'flex',
        justifyContent: 'space-between'
    },
    app__heading:{
        textAlign:'center'
    },
    app__cartpage: {
        paddingTop: '50px'
    }
}));