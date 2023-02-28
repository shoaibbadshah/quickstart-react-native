import * as React from 'react';
import { EffectPlayerView, BanubaSdkManager } from '@banuba/react-native';

export default class App extends React.Component {
  ep: any;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    BanubaSdkManager.initialize(
      [],
      <# Place your token here #>,
    );
    this.ep = React.createRef<typeof EffectPlayerView>();
  }

  render(): React.ReactNode {
    return <EffectPlayerView style={{ flex: 1 }} ref={this.ep} />;
  }

  componentDidMount(): void {
    BanubaSdkManager.attachView(this.ep.current._nativeTag);
    BanubaSdkManager.openCamera();
    BanubaSdkManager.startPlayer();
    BanubaSdkManager.loadEffect('effects/TrollGrandma');
  }

  componentWillUnmount(): void {
    BanubaSdkManager.stopPlayer();
  }
}
