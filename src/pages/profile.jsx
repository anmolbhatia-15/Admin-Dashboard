import { Mail, Phone } from "lucide-react"

function Profile() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="col-span-1 bg-white border-gray-200 shadow-sm
            rounded-xl p-6 flex flex-col items-center justify-center gap-4
            ">
                    <div className="w-20 h-20 bg-blue-800 text-white font-medium flex items-center justify-center text-3xl border-2 border-gray-400 rounded-full">AU</div>

                    <div className="text-center border-b border-gray-200
            w-full pb-4 mb-4
            ">
                        <p className="text-xl font-light text-text-blue">Admin User</p>
                        <p className="text-sm font-light text-text-blue mb-2">Super Admin</p>
                        <p className="text-sm font-light text-text-blue">Joined 2026-01-01</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Mail size={14} />
                            <span className="text-sm text-text-blue font-light">admin@gamil.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={14} />
                            <span className="text-sm text-text-blue font-light">+91 9876543210</span>

                        </div>
                    </div >
                </div>


                <div className="col-span-2 space-y-6">
                    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
                        <p className="text-sm text-text-blue font-light mb-4">About</p>
                        <p className="text-sm text-text-blue font-light max-w-xl">Full-stack developer with 8+ years of experience.
                            Passionate about building beautiful, scalable products.</p>
                    </div>
                     <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
                        <p className="text-sm text-text-blue font-light mb-4">Details</p>
                       <div className="text-sm text-text-blue font-light flex items-center gap-5 mb-2">
                        <span>Location</span>
                        <span>Delhi, India</span>
                       </div>
                       <div className="text-sm text-text-blue font-light flex items-center gap-5 mb-2">
                        <span>Website</span>
                        <span>https://adminhub.com</span>
                       </div>
                       <div className="text-sm text-text-blue font-light flex items-center gap-5 mb-2">
                        <span>Email</span>
                        <span>admin@gmail.com</span>
                       </div>
                    </div>

                </div>
                
                   

            </div>
        </>
    )
}
export default Profile