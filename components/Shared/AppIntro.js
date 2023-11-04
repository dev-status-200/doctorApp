import React, { useState, useRef, memo } from 'react';
import { Text, View, Image, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppIntroSlider from 'react-native-app-intro-slider';
import AntdIcons from 'react-native-vector-icons/AntDesign';
 
const slides = [
  {
    key: 1,
    title: 'Get Connect out Online Consultation',
    text: 'Improve the quality of the services for Patient Happiness.',
    image: require('../../assets/slides/slide1.png')
  },
  {
    key: 2,
    title: 'Consult only with a doctor you trust',
    text: 'Improve the quality of the services for Patient Happiness.',
    image: require('../../assets/slides/slide2.png')
  },
  {
    key: 3,
    title: 'Find a lot specialist doctors in one place',
    text: 'Improve the quality of the services for Patient Happiness.',
    image: require('../../assets/slides/slide3.png')
  }
];

function AppIntro({setHide}) {

  let sliderRef = useRef()
  const [slide, setSlide] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter };

  const renderItem = ({ item }) => {
    return (
    <View style={styles.slide}>
      <View style={{width:'100%', padding:15}}>
        <TouchableOpacity onPress={()=>{sliderRef.goToSlide(0); setSlide(0)}}>
          <CircleButton />
        </TouchableOpacity>
      </View>
      <Image source={item.image} style={styles.logo} />
      <View style={{marginTop:'5%', padding:20}}>
        <Text style={styles.slideHeading}>{item.title}</Text>
        <Text style={styles.slideText}>{item.text}</Text>
      </View>
    </View>
    );
  }

  const onDone = () => {
    setHide(true);
  }
  const DoneButton = () => {
    return (
      <View style={styles.buttonBase}>
        <Text style={styles.btnText}>Done</Text>
      </View>
    );
  };
  const NextButton = () => {
    return (
      <View style={styles.buttonBase}>
        <Text style={styles.btnText}>Next</Text>
      </View>
    );
  };
  const SkipButton = () => {
    return (
      <Text style={styles.skipButtonText}>Skip</Text>
    );
  };
  const CircleButton = () => {
    return(
    <View>
      {slide!="0"&&<AntdIcons name="leftcircle" color={"#D86321"} size={30} />}
      {slide=="0"&&<View style={{marginTop:30}}></View>}
    </View>
    )
  }
  
  return (
    <AppIntroSlider 
      onSlideChange={(e)=>setSlide(e)}
      ref={component => {sliderRef = component}}
      renderItem={renderItem} 
      data={slides} 
      onDone={onDone}
      renderDoneButton={DoneButton}
      renderNextButton={NextButton}
      showSkipButton
      onSkip={()=>{setSlide(2); sliderRef.goToSlide(2);}}
      renderSkipButton={SkipButton}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    />
  );
}
const styles = StyleSheet.create({
  logo: {
    width: "95%",
    height: 356,
  },
  buttonBase: {
    width: 120,
    height: 40,
    backgroundColor: '#D86321',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
    bottom:"155%"
  },
  btnText:{
    color:'white',
    fontWeight:'700'
  },
  slide:{
    flex:1,
    backgroundColor:'#FFFFFF',
    alignContent:'center',
    alignItems:'center',
  },
  dotStyle:{
    backgroundColor:'silver',
    width:'3%',
    height:5,
    position:'relative',
    bottom:"90%"
  },
  activeDotStyle:{
    backgroundColor:'grey',
    width:'11%',
    height:5,
    position:'relative',
    bottom:"90%"
  },
  slideHeading:{
    fontSize:24,
    color:'black'
  },
  slideText:{
    marginTop:10,
    fontSize:16,
    color:'grey'
  },
  circleBtn:{
    backgroundColor:"#D86321",
    width:30,
    height:30,
    marginLeft:20,
    marginTop:10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButtonText:{
    color:"grey",
    fontSize:20,
    marginLeft:10,
    fontWeight:"800",
    borderBottomWidth:1,
    borderBottomColor:'silver',
    paddingBottom:0,
    position:'relative',
    bottom:"200%"
  }
});

export default memo(AppIntro);