import React from 'react'

const Contact = () => {
    return(
        <section className="contact">
            <h3 className="contact__theme">お問い合わせ</h3>
            <form action="#" className="contact__form">
                <input className="contact__input contact__input-requirement" type="text" placeholder="ご用件" />
                <input className="contact__input contact__input-name" type="text" placeholder="お名前" />
                <input className="contact__input contact__input-email" type="email" placeholder="メールアドレス" />
                <textarea className="contact__input contact__input-text" name="" id="" cols="30" rows="10" placeholder="内容"></textarea>
                <input className="contact__input contact__input-submit" type="submit" value="送信" />
            </form>
        </section>
    )
}

export default Contact;