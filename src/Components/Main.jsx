import React, {useState} from 'react'

const Main = () => {

    return (
        <div className="main">
            <picture className="main__img-wrapper">
                <img src={`${process.env.PUBLIC_URL}/images/site-image.jpg`} alt="" className="main__img"/>
            </picture>
            <div className="main__body">
                <h2 className="main__body-title">Crazy Toys Villageは「個性的」・「独創的」・「前衛的」をテーマにしたおもちゃ専売サイトです。</h2>
                <p className="main__description">普通のおもちゃはつまらない。よくわからないおもちゃこそ大人も子供も老若男女全てを魅了し、惹きつけるのではないか？喉から手が出る程おもちゃが欲しい。自分だけの空間を作りたい。世界中から取り寄せたとっておきのおもちゃをあなたへ</p>
            </div>
        </div>
    )
}

export default Main;