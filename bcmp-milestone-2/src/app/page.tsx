import style from './components/general.module.css'

export default function Home() {
  return (<main>
    <h1 className={style.title}>About me!</h1>
    <div className={style.about}>
        <div className="about-image"><img src="hack4impact_selfie.png" alt="This is what I look like!" width="208" height="312"></img></div>
        <div className={style.aboutText}>
            <p>Hi! My name is <strong>Jodi Yamane</strong>! I'm a second year <strong>Computer Science</strong> major!</p>
            <p>Some fun facts about me are that I'm a cat person, but I <em>love</em> my 2 dogs, Keiko and Buds. I also have 2 cats named Joey and Nala that I also love! I'm looking forward to meeting other computer science majors and those who are interested in computers and systems!</p>
            <p>I have worked with <strong>Java, Python, C,</strong> and <strong>RISC-V</strong>.</p>
        </div>
    </div>
</main>
  )
}
