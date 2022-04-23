import React from 'react'
import "./SocialMedia.css"

function SocialMedia() {

    const [text, setText] = React.useState("");
    var a = [];
    const handleSubmit = async (e) => {
        // e.preventDefault();
        // setLoad(true);
        // const bod = {
        //   text: text,
        //   platforms: a
        // }
        // axios.post("http://localhost:5001/api/post", bod).then(
        // ).catch(err => console.log(err));
        // setTimeout(() => { navigate("/upcomingEvents", { replace: true }) }, 2000);
    }

    const handleOnchange = (event) => {
        setText(event.target.value);
    };

    const handleChange = (e) => {
        if (e.target.checked) a.push(e.target.value)
    }

    return (
        <div className="form-body h-full">
            <div className='py-5 text-4xl font-semibold mb-3 text-center'>You have been assigned the task to post on social media.</div>
            <div className="form-container">
                <form className="register-form">
                    <h3>Select Platforms to Post on :</h3>
                    <br />
                    <span>
                        <input type="checkbox" id="sm1" name="sm1" value="facebook" onChange={handleChange} checked={true} />
                        <label htmlFor="sm1"> Facebook</label>
                    </span>

                    <span>
                        <input type="checkbox" id="sm2" name="sm2" value="twitter" onChange={handleChange} checked={true} />
                        <label htmlFor="sm2"> Twitter</label>
                    </span>

                    <textarea
                        className="form-control"
                        value={text}
                        onChange={(e) => handleOnchange(e)}
                        id="inputText"
                        rows="12"
                        placeholder='Type your post here'
                    ></textarea>
                    <div onClick={(e) => handleSubmit(e)} className="form-field" type="submit">
                        Click to Post
                    </div>
                </form >
            </div >
        </div>
    )
}

export default SocialMedia