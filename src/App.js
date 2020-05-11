import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import {fetchData} from './api'
import covidImage from './images/image.png'
class App extends React.Component {

  state={
    data:{},
    country:'',
  }

  async componentDidMount()
  {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  //  console.log(fetchedData);
  }
  handleCountryChange= async(country)=>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country});

    console.log(('dfdf '+ country))
  }
 render(){

  const {data,country}=this.state;
  return (
    <div className={styles.container}>
     <img className={styles.image} src={covidImage} alt="COVID-19"/>
     <Cards data={data}/>
     <CountryPicker handleCountryChange={this.handleCountryChange}/>
     <Chart data={data} country={country}/>
    
    </div>
  );
 }
}

export default App;
