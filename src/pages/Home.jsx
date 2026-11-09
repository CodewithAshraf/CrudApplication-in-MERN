import Navbar from '../Components/Navbar';

function Home() {
    return (
        <>
            <Navbar />

            <div className="container d-flex justify-content-center align-items-center min-vh-100 p-4">
                <div className="card p-4 shadow-sm border-0" style={{ maxWidth: '450px', width: '100%', borderRadius: '16px', border: '1px solid #deebf7' }}>

                    <h2 className="fw-bold mb-1" style={{ color: '#032b69' }}>Feedback</h2>
                    <p className="small mb-4" style={{ color: '#0b5ed7' }}>We would love to hear your thoughts.</p>

                    <form>
                        {/* Name Field */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-semibold" style={{ color: '#032b69' }}>Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="form-control px-3 py-2"
                                style={{ backgroundColor: '#f7faff', borderColor: '#cfe2ff', color: '#032b69' }}
                                required
                            />
                        </div>

                        {/* Feedback Field */}
                        <div className="mb-4">
                            <label htmlFor="feedback" className="form-label fw-semibold" style={{ color: '#032b69' }}>Write a Feedback</label>
                            <textarea
                                id="feedback"
                                name="feedback"
                                rows="4"
                                placeholder="Share your experience with us..."
                                className="form-control px-3 py-2"
                                style={{ backgroundColor: '#f7faff', borderColor: '#cfe2ff', color: '#032b69', resize: 'none' }}
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn w-100 py-2 fw-medium text-white shadow-sm"
                            style={{ backgroundColor: '#0d6efd', borderRadius: '8px' }}
                        >
                            Send Feedback
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Home;
