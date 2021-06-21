import React, { useState } from 'react';
import { Dimensions, FlatList, Image, Animated, View } from 'react-native';
import styled from 'styled-components/native';

const datas = [
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
];

const Atom = () => {
  const onScroll = (e) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / Dimensions.get('screen').width
    );
    setPage(newPage);
  };

  const { width, height } = Dimensions.get('screen');

  const imageW = width * 0.7;
  const imageH = imageW * 1.54;

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <FlatList
        data={datas}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={(item) => {
          return (
            <View style={{ width }}>
              <Image
                source={{ uri: item }}
                style={{ width: imageW, height: imageH, resizeMode: 'cover' }}
              />
            </View>
          );
        }}
      />

      {/* <CustomFlatList
        automaticallyAdjustContentInsets={false}
        data={datas}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item) => item.id}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      /> */}

      {/* <IndicatorWrapper isTextImg={true}>
        <PageText isTextImg={true}>
          <NowText isTextImg={true}>{page + 1}</NowText> / {datas.length}
        </PageText>
      </IndicatorWrapper> */}
    </View>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// const Item = styled.View`
//   border-radius: 4px;
//   width: 300px;
//   height: 300px;
// `;

// const CustomFlatList = styled.FlatList`
//   width: ${Dimensions.get('window').width * 0.92}px;
//   border-radius: 8px;
// `;

// const IndicatorWrapper = styled.View`
//   position: absolute;
//   width: 48px;
//   height: 22px;
//   bottom: 12px;
//   right: 12px;
//   border-radius: 12px;
//   background-color: transparent;
//   justify-content: center;
//   align-items: center;
// `;

// const PageText = styled.Text`
//   font-size: 12px;
//   font-weight: 400;
//   color: black;
// `;

// const NowText = styled.Text`
//   font-size: 12px;
//   font-weight: 500;
//   color: red;
// `;

export default Atom;
