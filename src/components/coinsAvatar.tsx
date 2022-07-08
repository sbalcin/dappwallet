import React from 'react';
import FastImage from 'react-native-fast-image';

export function CoinsAvatar(props: any) {
  return (
    <FastImage
      style={props.style}
      source={{
        uri: props.source,
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.immutable,
      }}
    />
  );
}
