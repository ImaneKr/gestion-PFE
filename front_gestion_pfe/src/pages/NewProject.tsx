
import SubmitFormInput from "../components/SubmitFormInput"


const NewProject = () => {
    return (
        <div className="flex flex-col">
            <div className=" flex-row flex pb-1">
                <h1 className="text-[26px] font-inter ">
                    Submit New Project
                </h1>
                {/* 
               <button>
                </button>
                <button>

                </button>*/}
            </div>

            <div className="bg-white p-2 w-[99%] rounded-sm h-full ">
                <h2 className="text-[20px]">Fill project form</h2>
                <form className="p-2">
                    <SubmitFormInput 
                    label="Project title"
                    placeholder="Exemple"
                    width="50%"/>
                </form>
            </div>
        </div>
    )
}

export default NewProject