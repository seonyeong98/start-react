import './privacy.css'

function Privacy({name, phone, github}) {
    return(
      <section>
        <p className="name">개인정보</p>
        <p className="name">이름 : {name}</p>
        <p>전화번호 : {phone}</p>
        <p>github : {github}</p>
      </section>
    )
  }

export default Privacy;