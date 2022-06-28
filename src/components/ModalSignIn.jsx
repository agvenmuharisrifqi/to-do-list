import { useEffect, useState } from 'react'
import { BASE_URL } from '../assets/js/variable'

function ModalSigIn(props) {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [names, setNames] = useState([]);
    const [check, setCheck] = useState({ checkName: undefined, warning: "" });

    /**
     * Get all name from server
     */
    useEffect(() => {
        fetch(`${BASE_URL}/names`)
            .then(response => response.json())
            .then(result => setNames(result.names.map(item => item.toLowerCase())))
            .catch(error => console.log(error))
    }, []);

    /**
     * Function for check name
     */
    const confirmName = () => {
        if (names.includes(name.toLowerCase()) || name === "")
            setCheck({ checkName: false, warning: "Name already exists!" });
        else
            setCheck({ checkName: true, warning: "Name is available!" });
    }

    /**
     * Function for Login or Signup
     */
    const loginAccount = () => {
        const formData = new FormData()
        formData.append('name', name);
        formData.append('status', status)
        fetch(`${BASE_URL}/user`, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(result => sessionStorage.setItem("token", result.token.token))
            .catch(error => console.log(error))
    }

    return (
        <div
            className="modal">
            {props.signin && (
                <div
                    className="modal-wrapper">
                    <div
                        className="bg-white border border-slate-400 flex flex-col p-8 rounded gap-y-4 max-w-sm">
                        <h4
                            className="font-bold text-2xl text-center">
                            SIGN IN or SIGN UP
                        </h4>
                        <div
                            className="flex flex-col">
                            <input
                                type="text"
                                className="focus:outline-none text-base border p-2 rounded w-full mt-4"
                                placeholder="Type your name"
                                onChange={(e) => setName(e.target.value)} />
                            <span className={check.checkName ? 'text-left text-sm text-green-500' : 'text-left text-sm text-red-500'}>{check.warning}</span>
                            <input
                                type="text"
                                className="focus:outline-none text-base border p-2 rounded w-full mt-4"
                                placeholder="Type your status"
                                onChange={(e) => setStatus(e.target.value)} />
                            <button
                                className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-400 mt-4"
                                onClick={() => confirmName()}>
                                CHECK MY NAME
                            </button>
                            <button
                                className="bg-cyan-500 text-white w-full py-2 rounded hover:bg-cyan-400 mt-4"
                                onClick={() => loginAccount()}>
                                CONFIRM
                            </button>
                        </div>
                        <div
                            className="text-sm">
                            <span>
                                Note for old user :
                            </span>
                            <ul className="list-disc ml-4 text-orange-500">
                                <li>Ignore the warning that appears under the input name.</li>
                                <li>immediately press confirm after you type the name.</li>
                            </ul>
                            <span
                                className="text-sm">
                                Note for new user :
                            </span>
                            <ul className="list-disc ml-4 text-red-500">
                                <li>Click button CHECK MY NAME after you type the name.</li>
                                <li>Don't press confirm before we tell you that the name is available.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalSigIn;