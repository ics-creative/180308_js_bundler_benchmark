import React from 'react';
import ReactDOM from 'react-dom';

import {interval} from 'rxjs/observable/interval';
import {BoxGeometry, DirectionalLight, Mesh, MeshPhongMaterial, PerspectiveCamera, Scene, WebGLRenderer} from 'three';

class App extends React.Component {
  componentDidMount() {
    const width = 800;
    const height = 600;

    // レンダラーを作成
    const renderer = new WebGLRenderer({canvas: this.refs.myCanvas});
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new Scene();

    // カメラを作成
    const camera = new PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new BoxGeometry(500, 500, 500);
    const material = new MeshPhongMaterial({color: 0xFF0000});
    const box = new Mesh(geometry, material);
    scene.add(box);

    // 平行光源
    const directionalLight = new DirectionalLight(0xFFFFFF);
    directionalLight.position.set(1, 1, 1);
    // シーンに追加
    scene.add(directionalLight);

    interval(30)
      .subscribe(() => {
        // 箱を回転させる
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;

        // レンダリング
        renderer.render(scene, camera);
      });
  }

  render() {
    return (
      React.createElement('canvas', { ref: 'myCanvas' },)
    );
  }
}

ReactDOM.render(React.createElement(App), document.querySelector('#app'));

