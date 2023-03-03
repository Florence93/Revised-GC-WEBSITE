import React, { useRef, useState } from 'react';
import Video from './video'; 
import Container from './container';


function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');
 
  const subscribe = async (e) => {
    e.preventDefault();
 
    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
 
    const { error } = await res.json();
 
    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);
 
      return;
    }
 
    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };
 
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 justify-center items-center lg:flex-nowrap">  
    <div className="lg:col-auto xl:col-auto">
    <div className="flex flex-col justify-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
    <Video />
    <h1 class="text-1xl md:text-3xl xl:text-4xl font-bold tracking-tight mb-12">
             Ready To Learn More? 
             <br /><span class="text-indigo-500">Subscribe To Our Newsletter</span>
            </h1>
    <form onSubmit={subscribe}>
      <label htmlFor="email-input">{'Email Address'}</label>
      <input
        id="email-input"
        name="email"
        placeholder="you@awesome.com"
        ref={inputEl}
        required
        type="email"
        class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              
      />
      <div>
        {message
          ? message
          : `I'll only send emails when new content is posted. No spam.`}
      </div>
      <button
                type="submit"
                class="inline-block px-7 py-3 bg-indigo-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
               Subscribe
              </button>
    </form>
    </div>
    </div>
  
    </Container>
  );
}

export default Subscribe;