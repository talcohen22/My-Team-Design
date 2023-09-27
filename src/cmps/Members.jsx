import { utilService } from "../services/util.service";

export function Members() {
    return (
        <section className="members-layout">
            <div className="mamber-layout-div">
                <div className="members-header">
                    <h1>Delivering real results for top companies. Some of our
                        <span> success stories.</span>
                    </h1>
                </div>
                <div className="members-container">
                    <div className='member member1'>
                        <img className="quote" src={utilService.getAssetSrc('quote')} alt="" />
                        <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <h2>Kady Baker</h2>
                        <small>Product Manager at Bookmark</small>
                        <img className="member-img" src={utilService.getAssetSrc('member1')} alt="" />
                    </div>
                    <div className='member member2'>
                        <img className="quote" src={utilService.getAssetSrc('quote')} alt="" />
                        <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        <h2>Aiysha Reese</h2>
                        <small>Founder of Manage</small>
                        <img className="member-img" src={utilService.getAssetSrc('member2')} alt="" />
                    </div>
                    <div className='member member3'>
                        <img className="quote" src={utilService.getAssetSrc('quote')} alt="" />
                        <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                        <h2>Arthur Clarke</h2>
                        <small>Co-founder of MyPhysio</small>
                        <img className="member-img" src={utilService.getAssetSrc('member3')} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

