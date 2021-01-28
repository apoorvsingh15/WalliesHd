import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image, ScrollView} from 'react-native';
import axios from 'axios';
import Header from '../../reuse/Header';
import {API_KEY} from '../../../../Security';

interface IImageProps {
  id: number;
  url: string;
  src: {
    tiny: string;
    small: string;
  };
}

const HomeScreen = () => {
  const [images, setImages] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://api.pexels.com/v1/curated?per_page=10', {
        headers: {
          Authorization: API_KEY, //the token is a variable which holds the token
        },
      })
      .then((res) => {
        setImages(res.data.photos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#4630EB" />
      <View>
        <Header />
        <ScrollView>
          {!loading ? (
            images.map((img: IImageProps) => {
              console.log(img.src.small, '<=d=d=d=d=');
              return (
                <Image
                  key={img.id}
                  source={{
                    uri: img.src.tiny,
                    width: 200,
                    height: 200,
                  }}
                />
              );
            })
          ) : (
            <View style={{backgroundColor: 'red'}}>
              <Text>Loading...</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
