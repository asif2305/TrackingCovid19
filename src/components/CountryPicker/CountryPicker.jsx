import React ,{useState,useEffect} from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
const CountryPicker =({handleCountryChange})=>{
    const [age, setAge] = React.useState('Global');
    const classes = useStyles();

    const [fetchedCountries,setfetchCountries]=useState([]);

    useEffect(()=>{
      const fetchApi=async()=>{
          setfetchCountries(await fetchCountries());
      }
      fetchApi();
    },[setfetchCountries]);
    console.log(fetchedCountries)


    return(
       <FormControl className={classes.formControl}>
           <Select defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
             <option value='' >Global</option>
             {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
           </Select>
       </FormControl>
    )
}
export default CountryPicker;