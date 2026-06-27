import Header from "../layout/Header"

export default function Issues() {
    return (
        <>
            <Header />
            <div id="issues" className="pt-30">
                <div>
                    <div className="text text-3xl font-bold">Issues</div>
                    <div className="text-gray-600">
                        <span>3</span> of <span>3</span> reports
                    </div>
                </div>
            </div>
        </>
    )
}