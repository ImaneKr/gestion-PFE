
import SubmitFormInput from "../components/SubmitFormInput"


const NewProject = () => {
    return (
        <div className="flex flex-col">
            <div className=" flex-row flex ">
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
                <form className="p-2 flex flex-col gap-2">
                    <SubmitFormInput
                        label="Project title"
                        placeholder="Exemple"
                        width="45%"
                        required={true}
                    />
                    <SubmitFormInput 
                    label="Project Description"
                    placeholder="Description..."
                    width="45%"
                    maxLength={4}
                    type="textarea"
                    />

                </form>
            </div>
        </div>
    )
}

export default NewProject