
import '.././styles/GetInTouch.css'

export default function GetInTouch() {
  return (
    <>
    <div className='grid-wrapper section-getintouch' data-scroll-section>
        <div className='text-getintouch'>
          <h2>Get in touch with us</h2>
          <p>If you are looking for good wine for your venue, have some good wine you want us to bring in, or you simply just want to talk about wine, drop us a message using the form below and we will get in touch with you shortly.</p>
        </div>
        <div className='formcontact-getintouch'>
          <form>
            <div>
              <input type="text" name="name" placeholder="Name"/>
              <input type="text" name="contact" placeholder="Phone"/>
              <input type="text" name="email" placeholder="Email"/>
            </div>
            
            <textarea defaultValue={'Message ...'}>
              
            </textarea>
          </form>
          <button onClick={() => {console.log('Mail Send')}}>Contact Us</button>
        </div>
        </div>
    </>

  )
}
