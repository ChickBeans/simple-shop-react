import React, { useState } from "react";

const Contact = () => {
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [content, changeContent] = useState("");
  const [isSubmitted, checkSubmitted] = useState(false);
  const [isError, checkError] = useState(false);

  const handleName = (event) => {
    // 入力チェック
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    changeName(inputValue);
    checkError(isEmpty);
};
const handleEmail = (event) => {
    // 入力チェック
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    changeEmail(inputValue);
    checkError(isEmpty);
  };
  const handleContent = (event) => {
    const inputValue = event.target.value;
    changeContent(inputValue);
  };
  const openSubmitModal = () => {
      checkSubmitted(true);
    };
    const closeSubmitModal = () => {
        checkSubmitted(false);
  }

  let errorText;
  if (isError) {
      errorText = (
          <p className="contact__error-message">
              要件・お名前・メールアドレス全て入力してください
          </p>
      )
  }

  let completeSubmit;
  if (isSubmitted) {
    completeSubmit = (
      <div className="complete">
        <h2 className="complete__message">送信完了しました</h2>
        <span 
        className="complete__btn"
        onClick={()=>{closeSubmitModal()}}
        >Close</span>
      </div>
    );
  }

  return (
    <section className="contact" id="contact">
      <h3 className="contact__theme">お問い合わせ</h3>
      {errorText}
      <form action="" className="contact__form">
        <input
          className="contact__input contact__input-name"
          type="text"
          placeholder="お名前"
          onChange={(event) => {
            handleName(event);
          }}
        />
        <input
          className="contact__input contact__input-email"
          type="email"
          placeholder="メールアドレス"
          onChange={(event) => {
            handleEmail(event);
          }}
        />
        <textarea
          className="contact__input contact__input-content"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="内容"
          onChange={(event) => {
            handleContent(event);
          }}
        ></textarea>
        <input
          className="contact__input contact__input-submit"
          type="submit"
          value="送信"
          onClick={() => {
            openSubmitModal();
          }}
        />
        {completeSubmit}
      </form>
    </section>
  );
};

export default Contact;
