
const Loading = () => {
    return (
        <div className="fixed w-screen h-screen text-center flex justify-center items-center loading top-0 left-0 z-40 text-white"
            style={{background: "#0008"}}
        >

            <svg 
                width="205" height="250" 
                viewBox="0 0 40 50"
                className="uppercase font-semibold"
            >
                <polygon stroke="#fff" strokeWidth="1" fill="none"
                points="20,1 40,40 1,40" />
                <text fill="#fff" x="5" y="47">Loading</text>
            </svg>
            
        </div>
    )
}

export default Loading
