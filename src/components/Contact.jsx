export default function Contact() { 
    return ( 
        <div className="py-10 px-4 mx-auto max-w-screen-md h-full"> 
            <h2 className="mb-4 text-4xl font-extrabold  
                           text-center"> 
                Contact 
            </h2> 
            <p className="mb-4 font-light text-left sm:text-xl"> 
                If you have any questions please use the contact form below.
            </p> 
            <form action="#"> 
                <div className="flex flex-row"> 
                    <div className="w-1/2 pr-2 "> 
                        <label for="firstName" 
                               className="block my-2 text-left  
                                          text-sm font-medium"> 
                            First Name 
                        </label> 
                        <input type="text" 
                               className="shadow-sm bg-gray-50 border 
                                          border-gray-30m  
                                          text-sm rounded-lg block w-full p-2.5" 
                               placeholder="Enter First Name"
                               required/> 
                    </div> 
                    <div className="w-1/2 pl-2"> 
                        <label for="lastName" 
                               className="block my-2 text-left text-sm  
                                          font-medium"> 
                            Last Name 
                        </label> 
                        <input type="text" 
                               className="shadow-sm bg-gray-50 border  
                                          border-gray-300   
                                          text-sm rounded-lg block w-full p-2.5"
                               placeholder="Enter Last Name"/> 
                    </div> 
                </div> 
                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium "> 
                        Your email 
                    </label> 
                    <input type="email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300   
                                      text-sm rounded-lg block w-full p-2.5" 
                           placeholder="Enter your email " 
                           required /> 
                </div> 
                <div> 
                    <label for="subject" 
                           className="block my-2 text-left  
                                      text-sm font-medium"> 
                        Subject 
                    </label> 
                    <input type="text" 
                           className="block p-3 w-full text-sm  
                                      bg-gray-50 rounded-lg  
                                      border border-gray-300 shadow-sm "
                           placeholder="Add a subject line" 
                           required /> 
                </div> 
                <div > 
                    <label for="message" 
                           className="block my-2 text-left  
                                      text-sm font-medium "> 
                        Your message 
                    </label> 
                    <textarea rows="6" 
                              className="block p-2.5 w-full text-sm  
                                         bg-gray-50 rounded-lg  
                                         shadow-sm border border-gray-300 " 
                              placeholder="Write your message here"/> 
                </div> 
                <button type="submit" 
                        className="mt-2 p-2 float-right text-white   
                                   rounded-lg border-green-600  
                                   bg-green-600 hover:scale-105"> 
                    Send message 
                </button> 
            </form> 
        </div> 
    ) 
}