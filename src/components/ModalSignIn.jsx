export function ModalSigIn(props) {
    const saveAccount = (e) => {
        props.name(e.target.value);
        localStorage.setItem("name", e.target.value)
    }
    return (
        <div className="modal">
            {props.signin && (
                <div className="modal-wrapper">
                    <div className="bg-white border border-slate-400 flex flex-col p-8 rounded gap-y-4">
                        <h4 className="font-bold text-2xl">SIGN UP</h4>
                        <div className="flex flex-col">
                            <input onChange={(e) => saveAccount(e)} type="text" placeholder="Type your name" className="focus:outline-none text-base border p-2 rounded" />
                            {/* <span className="text-red-500 text-sm">Your name is already exists.</span> */}
                        </div>
                        <input onChange={(e) => props.status(e.target.value)} type="text" placeholder="Type your status" className="focus:outline-none text-base border p-2 rounded" />
                        <button className="bg-cyan-400 py-2 rounded" onClick={() => props.onClick(false)}>CONFIRM</button>
                        <p>
                            Note :
                            <span className="text-red-500 text-sm">
                                Make sure your name is unique because we use that name to distinguish it from others.
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}