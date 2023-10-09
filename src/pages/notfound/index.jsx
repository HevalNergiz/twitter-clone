import Button from "../../components/button/index.jsx";
export default function NotFound(){
    return(
        <div className="py-10 px-3">
            <div className="mx-auto justify-center text-center align-center mt-10">
                <p className="text-[#71767B] mb-7">
                    Hmm... böyle bir sayfa yok. Başka bir şey aramayı dene.
                </p>
                <div className="flex justify-center">
                    <Button>
                        Ara
                    </Button>
                </div>

            </div>
        </div>
    )
}