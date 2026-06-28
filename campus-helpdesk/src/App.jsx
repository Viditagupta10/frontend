import { useState } from 'react'

// ─── Amity Logo (actual image) ───────────────────────────────────────────────
const AMITY_LOGO_SRC = "data:image/jpeg;base64,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Ws6WCA4BBBBBBBBQRNxlAmuFVRJBBBBBBBBm1Byc2y/jdBBBBBJBBBBBAOMsctsfO/tgMKBBBB399M19999999IMKBDF/wDfeUyPffffffY8IkXvfffbSGfPfffffQjLf/fffedLG/8A333332oDf33333xXqR7D33332PDH33332zdonr733330Pzz333332mAexz33332IGzX333328Teu/wB9999l88a99999LAWnRY999py8/v299995mADjY995xU88Mrw9998SPA9c9+uE8888cJy+99ez/oZs7f8APPPPPLHzlNfwtRrTXPPPPPPPPPLPx1sAzX/PPPPPPPPPPPPPPfnPPPPPPPPP/8QAQREAAgECAwQECgcIAgMAAAAAAQIDAAQFETEGEiFBECAicQcTFDJCUVJhcoEjMDRic5KxMzVFU4KRstEVwXShov/aAAgBAgEBPwDoAJ0FLbStyy76WzHpPQtYRyJoQxDRBQVRyHSVB1AoxRnVF/tRtoT6OVNZryc01rKNMjTKy6gjqJDI+i/OktFHFznSqqjJQB0OwRSxpGDqGGhpplVgCCOjxy75UAk0ZlD7u62dGUb27kSaEysCQrHKjOgVWyORovku8QaVt4Z5EUQCMiKe1jbTsmnt5U5Zj1joTzF7h1G7TqvzNW/Z8YnstUqb7bv3DSSZwhueWXzpF3bjL7lP9pj+E0AATkNatfNf4zTxKyMo4Z/rUbmRQh1Hndw6uQpPNXu6SQBmaTxcrOdeOQ7qJjinGRGRGRoyx+OA3h5pFKpErL6IO9QdPKSd4ZbuWdO6eUp2hwBBrMAZk8KtWXJxmM96jwqF18dL2hxPDrJ5q93UDkorBda3+LjLiP8A3W8d4LlyzpXJC8NSQaDk59nRsqMmW/w4LW/xIA0Fb53mG7oKDkkjd0OVK5bd4evP3ZdZPNXuHUVWCheQ50yM29oDyrdbxgPLdyoLkzGgjAk7q572YNGNizNw1BFOhbUDTgeYNBT4xjyIFKGDOTzNKpDueGR6y+avd17zaPBLMkTX0e8PRTtn/wCaufCDhiZiC1nl78kFT+EO/bPxNlAnxEv/AKqXbfaB9J40+GMf950+1W0D64jJ8go/QUdosdP8SuPzmhtFjg/iVx+c0m1GPppiMvzyP61HtrtCmtyj/FGtQeELEl/bWkEnw5oa2ex5cat5pRbm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"

const AmityLogo = ({ size = 60 }) => (
  <img src={AMITY_LOGO_SRC} alt="Amity University" width={size} height={size * 1.18} style={{ objectFit: 'contain', display: 'block' }} />
)

// ─── Data ────────────────────────────────────────────────────────────────────
const initialUsers = [
  { id: 1, name: 'Vidhi Gupta', email: 'vidhi@amity.edu', password: '1234', role: 'student', studentId: 'A2305', avatar: 'V' },
  { id: 2, name: 'Keshav Sharma', email: 'keshav@amity.edu', password: '1234', role: 'student', studentId: 'A2306', avatar: 'K' },
  { id: 3, name: 'Admin', email: 'admin@amity.edu', password: 'admin123', role: 'admin', studentId: '-', avatar: 'A' }
]

const initialNotices = [
  { id: 1, title: 'Fee Submission Deadline', date: '2026-06-15', category: 'Fees', description: 'Last date to submit semester fees is 15th June 2026. Late fine will be applicable after the due date.' },
  { id: 2, title: 'End Semester Exam Timetable Released', date: '2026-06-10', category: 'Exam', description: 'End semester examination timetable has been released. Check the notice board for details.' },
  { id: 3, title: 'Hostel Curfew Reminder', date: '2026-06-08', category: 'Hostel', description: 'All hostel students must return by 10:00 PM. Strict action will be taken against violators.' },
  { id: 4, title: 'Placement Orientation Session', date: '2026-06-13', category: 'Placement', description: 'A placement orientation session will be conducted for final-year students. Attendance is recommended.' }
]

const initialTickets = [
  { id: 1, studentId: 'A2305', student: 'Vidhi Gupta', email: 'vidhi@amity.edu', issue: 'Fee receipt not generated', status: 'Open', date: '2026-06-12', private: false },
  { id: 2, studentId: 'A2306', student: 'Keshav Sharma', email: 'keshav@amity.edu', issue: 'Library card not issued', status: 'Resolved', date: '2026-06-10', private: false },
  { id: 3, studentId: 'A2305', student: 'Vidhi Gupta', email: 'vidhi@amity.edu', issue: 'Hostel room maintenance issue', status: 'Open', date: '2026-06-11', private: true }
]

const initialDocs = [
  { id: 1, name: 'Admission Brochure.pdf', date: '2026-06-01', size: '2.4 MB' },
  { id: 2, name: 'Fee Structure 2026.pdf', date: '2026-06-02', size: '1.1 MB' },
  { id: 3, name: 'MCA Syllabus.pdf', date: '2026-06-03', size: '3.2 MB' },
  { id: 4, name: 'Hostel Rules 2026.pdf', date: '2026-06-04', size: '0.8 MB' }
]

const CATEGORIES = ['General', 'Fees', 'Exam', 'Admission', 'Placement', 'Hostel']

const categoryColor = (cat) => {
  const map = { General: '#6c757d', Fees: '#0084ff', Exam: '#764ba2', Admission: '#00aa00', Placement: '#ff8800', Hostel: '#e91e63' }
  return map[cat] || '#888'
}

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

// ─── LANDING PAGE ─────────────────────────────────────────────────────────────
function LandingPage({ onGetStarted }) {
  const features = [
    { icon: '🤖', title: 'AI Chat Assistant', desc: 'Get instant answers to campus queries powered by AI, available 24/7.' },
    { icon: '🎫', title: 'Support Tickets', desc: 'Raise and track support tickets for any campus-related issues seamlessly.' },
    { icon: '📢', title: 'Notice Board', desc: 'Stay updated with the latest announcements, exam schedules, and events.' },
    { icon: '📁', title: 'Document Center', desc: 'Access fee structures, syllabi, brochures, and important documents.' },
    { icon: '🔒', title: 'Private Tickets', desc: 'Submit sensitive issues confidentially — only admins can view them.' },
    { icon: '📊', title: 'Admin Dashboard', desc: 'Comprehensive management panel for administrators to oversee all activity.' },
  ]

  const stats = [
    { value: '5000+', label: 'Students Served' },
    { value: '98%', label: 'Resolution Rate' },
    { value: '24/7', label: 'AI Support' },
    { value: '< 2hr', label: 'Avg Response Time' },
  ]

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Segoe UI', sans-serif", background: '#f0f2f8' }}>

      {/* ── Navbar ── */}
      <nav style={{ background: '#1B3A6B', padding: '0 40px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 20px rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AmityLogo size={38} />
          <div>
            <div style={{ color: 'white', fontWeight: '800', fontSize: '16px', letterSpacing: '0.5px' }}>Amity University</div>
            <div style={{ color: '#F5A623', fontSize: '11px', fontWeight: '600', letterSpacing: '1px' }}>JHARKHAND</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {['About', 'Features', 'Contact'].map(item => (
            <span key={item} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>{item}</span>
          ))}
          <button onClick={onGetStarted} style={{ padding: '9px 24px', background: '#F5A623', color: '#1B3A6B', border: 'none', borderRadius: '8px', fontWeight: '800', fontSize: '14px', cursor: 'pointer' }}>
            Login Portal →
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0f2347 50%, #1a1a3e 100%)', padding: '80px 40px 90px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Background blobs */}
        <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '300px', height: '300px', background: 'rgba(245,166,35,0.08)', borderRadius: '50%', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '400px', height: '400px', background: 'rgba(102,126,234,0.1)', borderRadius: '50%', filter: 'blur(80px)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)', borderRadius: '30px', padding: '6px 18px', marginBottom: '28px' }}>
            <span style={{ fontSize: '12px' }}>✨</span>
            <span style={{ color: '#F5A623', fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>AI-POWERED CAMPUS HELPDESK</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
            <AmityLogo size={90} />
          </div>

          <h1 style={{ margin: '0 0 16px 0', color: 'white', fontSize: '48px', fontWeight: '900', lineHeight: '1.15', letterSpacing: '-0.5px' }}>
            Amity University<br />
            <span style={{ color: '#F5A623' }}>Campus Helpdesk Portal</span>
          </h1>
          <p style={{ margin: '0 auto 40px', color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '560px', lineHeight: '1.65' }}>
            One smart platform for students and administrators — raise tickets, chat with AI, access notices, and manage campus operations effortlessly.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onGetStarted} style={{ padding: '14px 36px', background: '#F5A623', color: '#1B3A6B', border: 'none', borderRadius: '12px', fontWeight: '800', fontSize: '15px', cursor: 'pointer', boxShadow: '0 8px 30px rgba(245,166,35,0.4)' }}>
              Enter Student Portal →
            </button>
            <button onClick={onGetStarted} style={{ padding: '14px 36px', background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', fontWeight: '700', fontSize: '15px', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
              Admin Login
            </button>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div style={{ background: '#F5A623', padding: '28px 40px' }}>
        <div style={{ maxWidth: '900px', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
          {stats.map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#1B3A6B' }}>{stat.value}</div>
              <div style={{ fontSize: '13px', color: '#1B3A6B', fontWeight: '600', opacity: 0.75 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features ── */}
      <div style={{ padding: '70px 40px', maxWidth: '960px', margin: 'auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ margin: '0 0 12px 0', color: '#1B3A6B', fontSize: '32px', fontWeight: '800' }}>Everything You Need, In One Place</h2>
          <p style={{ margin: 0, color: '#888', fontSize: '15px' }}>Designed for the Amity community — students, faculty, and administrators.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {features.map(f => (
            <div key={f.title} style={{ background: 'white', borderRadius: '16px', padding: '28px 24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderTop: '4px solid #F5A623', transition: 'transform 0.2s' }}>
              <div style={{ fontSize: '36px', marginBottom: '14px' }}>{f.icon}</div>
              <h3 style={{ margin: '0 0 8px 0', color: '#1B3A6B', fontSize: '16px', fontWeight: '800' }}>{f.title}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '13px', lineHeight: '1.6' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── About Section ── */}
      <div style={{ background: '#1B3A6B', padding: '70px 40px' }}>
        <div style={{ maxWidth: '860px', margin: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#F5A623', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', marginBottom: '14px' }}>ABOUT AMITY UNIVERSITY</div>
            <h2 style={{ margin: '0 0 16px 0', color: 'white', fontSize: '28px', fontWeight: '800', lineHeight: '1.3' }}>Shaping Leaders Through Excellence in Education</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.75', marginBottom: '20px' }}>
              Amity University Jharkhand is part of the Amity Education Group — India's leading private education institution. We offer world-class education with state-of-the-art infrastructure and industry-aligned curriculum.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.75' }}>
              Our AI-powered Campus Helpdesk ensures every student gets timely support, whether it's academic queries, administrative issues, or hostel concerns.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'University Established', value: 'Est. 1995' },
              { label: 'Campus Area', value: '150+ Acres' },
              { label: 'Programs Offered', value: '200+ Courses' },
              { label: 'Alumni Network', value: '1,50,000+' },
            ].map(item => (
              <div key={item.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(245,166,35,0.2)', borderRadius: '12px', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>{item.label}</span>
                <span style={{ color: '#F5A623', fontWeight: '800', fontSize: '15px' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ background: 'linear-gradient(135deg, #F5A623, #e8920f)', padding: '60px 40px', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 12px 0', color: '#1B3A6B', fontSize: '30px', fontWeight: '900' }}>Ready to get started?</h2>
        <p style={{ margin: '0 0 30px 0', color: '#1B3A6B', fontSize: '15px', opacity: 0.75 }}>Log in to access the full campus helpdesk experience.</p>
        <button onClick={onGetStarted} style={{ padding: '14px 40px', background: '#1B3A6B', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '800', fontSize: '15px', cursor: 'pointer', boxShadow: '0 8px 30px rgba(27,58,107,0.3)' }}>
          Go to Login Portal →
        </button>
      </div>

      {/* ── Footer ── */}
      <div style={{ background: '#0f2347', padding: '24px 40px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
          <AmityLogo size={24} />
          <span style={{ color: 'white', fontWeight: '700', fontSize: '14px' }}>Amity University Jharkhand</span>
        </div>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>
          © 2026 Amity University. Campus Helpdesk Portal — AI-Powered Support System.
        </p>
      </div>
    </div>
  )
}

// ─── LOGIN PAGE ───────────────────────────────────────────────────────────────
function LoginPage({ onLogin, users, onBack }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [successUser, setSuccessUser] = useState(null)

  const handleLogin = () => {
    if (!email || !password) { setError('Please fill in all fields!'); return }
    if (!isValidEmail(email)) { setError('Please enter a valid email address!'); return }
    setLoading(true)
    setTimeout(() => {
      const user = users.find(u => u.email === email && u.password === password)
      if (user) {
        setLoading(false)
        setSuccessUser(user)
        setTimeout(() => { onLogin(user) }, 2200)
      }
      else { setError('Invalid email or password!'); setLoading(false) }
    }, 1000)
  }

  // ── Success Screen ──────────────────────────────────────────────────────────
  if (successUser) {
    const isAdmin = successUser.role === 'admin'
    return (
      <div style={{ minHeight: '100vh', background: isAdmin ? 'linear-gradient(135deg, #0f0c29, #1a1a2e, #0f3460)' : 'linear-gradient(135deg, #0f0c29, #1B3A6B, #0f2347)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Segoe UI', sans-serif", position: 'relative', overflow: 'hidden' }}>
        {/* Animated ring 1 */}
        <div style={{ position: 'absolute', width: '420px', height: '420px', borderRadius: '50%', border: isAdmin ? '2px solid rgba(255,136,0,0.25)' : '2px solid rgba(245,166,35,0.25)', animation: 'ping1 1.4s ease-out forwards' }} />
        {/* Animated ring 2 */}
        <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', border: isAdmin ? '2px solid rgba(255,136,0,0.35)' : '2px solid rgba(245,166,35,0.35)', animation: 'ping2 1.4s ease-out 0.2s forwards' }} />
        {/* Glow blob */}
        <div style={{ position: 'absolute', width: '350px', height: '350px', borderRadius: '50%', background: isAdmin ? 'rgba(255,136,0,0.08)' : 'rgba(245,166,35,0.08)', filter: 'blur(60px)' }} />

        <style>{`
          @keyframes ping1 { 0%{transform:scale(0);opacity:1} 100%{transform:scale(1.2);opacity:0} }
          @keyframes ping2 { 0%{transform:scale(0);opacity:1} 100%{transform:scale(1.3);opacity:0} }
          @keyframes checkPop { 0%{transform:scale(0) rotate(-20deg);opacity:0} 60%{transform:scale(1.2) rotate(5deg);opacity:1} 100%{transform:scale(1) rotate(0deg);opacity:1} }
          @keyframes fadeUp { 0%{opacity:0;transform:translateY(18px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes progressBar { 0%{width:0%} 100%{width:100%} }
        `}</style>

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '20px' }}>
          {/* Checkmark circle */}
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: isAdmin ? 'linear-gradient(135deg, #ff8800, #ff4444)' : 'linear-gradient(135deg, #F5A623, #e8920f)', margin: '0 auto 28px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: isAdmin ? '0 0 50px rgba(255,136,0,0.5)' : '0 0 50px rgba(245,166,35,0.5)', animation: 'checkPop 0.5s cubic-bezier(0.175,0.885,0.32,1.275) forwards' }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M10 25L20 35L38 15" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ strokeDasharray: 50, strokeDashoffset: 0, animation: 'none' }} />
            </svg>
          </div>

          {/* Role badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: isAdmin ? 'rgba(255,136,0,0.15)' : 'rgba(245,166,35,0.15)', border: isAdmin ? '1px solid rgba(255,136,0,0.35)' : '1px solid rgba(245,166,35,0.35)', borderRadius: '30px', padding: '6px 18px', marginBottom: '16px', animation: 'fadeUp 0.5s ease 0.3s both' }}>
            <span style={{ fontSize: '13px' }}>{isAdmin ? '🛡️' : '🎓'}</span>
            <span style={{ color: isAdmin ? '#ff8800' : '#F5A623', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              {isAdmin ? 'Administrator' : 'Student'} Account
            </span>
          </div>

          {/* Main message */}
          <h1 style={{ margin: '0 0 8px 0', color: 'white', fontSize: '28px', fontWeight: '900', animation: 'fadeUp 0.5s ease 0.4s both', opacity: 0 }}>
            Login Successful! 🎉
          </h1>
          <p style={{ margin: '0 0 6px 0', color: 'rgba(255,255,255,0.8)', fontSize: '16px', fontWeight: '600', animation: 'fadeUp 0.5s ease 0.5s both', opacity: 0 }}>
            Welcome back, <span style={{ color: isAdmin ? '#ff8800' : '#F5A623' }}>{successUser.name}</span>!
          </p>
          <p style={{ margin: '0 0 32px 0', color: 'rgba(255,255,255,0.45)', fontSize: '13px', animation: 'fadeUp 0.5s ease 0.6s both', opacity: 0 }}>
            {isAdmin ? 'Redirecting you to Admin Dashboard...' : 'Redirecting you to Student Dashboard...'}
          </p>

          {/* Dashboard preview card */}
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '16px 24px', marginBottom: '28px', backdropFilter: 'blur(10px)', animation: 'fadeUp 0.5s ease 0.7s both', opacity: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: isAdmin ? 'linear-gradient(135deg, #ff8800, #ff4444)' : 'linear-gradient(135deg, #F5A623, #e8920f)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isAdmin ? 'white' : '#1B3A6B', fontWeight: '900', fontSize: '17px' }}>
                {successUser.avatar}
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: 0, color: 'white', fontWeight: '700', fontSize: '14px' }}>{successUser.name}</p>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.45)', fontSize: '12px' }}>{successUser.email}</p>
              </div>
              <div style={{ marginLeft: 'auto', background: isAdmin ? 'rgba(255,136,0,0.15)' : 'rgba(245,166,35,0.15)', borderRadius: '8px', padding: '4px 12px' }}>
                <span style={{ color: isAdmin ? '#ff8800' : '#F5A623', fontSize: '12px', fontWeight: '700' }}>
                  {isAdmin ? 'Admin' : `ID: ${successUser.studentId}`}
                </span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ width: '280px', margin: '0 auto', animation: 'fadeUp 0.5s ease 0.8s both', opacity: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>Preparing your dashboard</span>
              <span style={{ color: isAdmin ? '#ff8800' : '#F5A623', fontSize: '12px', fontWeight: '700' }}>→</span>
            </div>
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: isAdmin ? 'linear-gradient(90deg, #ff8800, #ff4444)' : 'linear-gradient(90deg, #F5A623, #e8920f)', borderRadius: '10px', animation: 'progressBar 2s linear 0.9s both' }} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0c29, #1B3A6B, #0f2347)', display: 'flex', flexDirection: 'column', fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Back nav */}
      <div style={{ padding: '16px 30px' }}>
        <button onClick={onBack} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)', padding: '8px 18px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>
          ← Back to Home
        </button>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        {/* Background blobs */}
        <div style={{ position: 'fixed', top: '10%', left: '10%', width: '300px', height: '300px', background: 'rgba(245,166,35,0.07)', borderRadius: '50%', filter: 'blur(60px)' }} />
        <div style={{ position: 'fixed', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'rgba(102,126,234,0.08)', borderRadius: '50%', filter: 'blur(80px)' }} />

        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', padding: '45px 40px', borderRadius: '24px', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', width: '400px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1 }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
              <div style={{ background: 'white', borderRadius: '16px', padding: '8px 12px', boxShadow: '0 10px 30px rgba(245,166,35,0.3)' }}>
                <AmityLogo size={54} />
              </div>
            </div>
            <h2 style={{ margin: '0 0 6px 0', color: 'white', fontSize: '22px', fontWeight: '800', letterSpacing: '0.3px' }}>Amity University</h2>
            <p style={{ margin: 0, color: '#F5A623', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px' }}>CAMPUS HELPDESK PORTAL</p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <input style={{ width: '100%', padding: '13px 16px 13px 44px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }} placeholder="yourname@amity.edu" value={email} onChange={(e) => { setEmail(e.target.value); setError('') }} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} />
              <span style={{ position: 'absolute', left: '14px', top: '14px', fontSize: '16px' }}>📧</span>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input style={{ width: '100%', padding: '13px 50px 13px 44px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }} placeholder="Enter your password" type={show ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value); setError('') }} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} />
              <span style={{ position: 'absolute', left: '14px', top: '14px', fontSize: '16px' }}>🔒</span>
              <span onClick={() => setShow(!show)} style={{ position: 'absolute', right: '14px', top: '13px', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: '13px', userSelect: 'none' }}>{show ? 'Hide' : 'Show'}</span>
            </div>
          </div>

          {error && <div style={{ background: 'rgba(255,68,68,0.15)', border: '1px solid rgba(255,68,68,0.3)', padding: '12px', borderRadius: '10px', color: '#ff6b6b', fontSize: '13px', marginBottom: '16px', textAlign: 'center' }}>{error}</div>}

          <button style={{ width: '100%', padding: '14px', background: loading ? 'rgba(245,166,35,0.5)' : '#F5A623', color: loading ? 'rgba(27,58,107,0.5)' : '#1B3A6B', border: 'none', borderRadius: '12px', fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: '800', boxShadow: '0 8px 25px rgba(245,166,35,0.3)' }} onClick={handleLogin}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <div style={{ marginTop: '24px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: 'rgba(255,255,255,0.5)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>Demo Credentials</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.05)', padding: '8px 12px', borderRadius: '8px' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Student</span>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: '600' }}>vidhi@amity.edu / 1234</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.05)', padding: '8px 12px', borderRadius: '8px' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Admin</span>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: '600' }}>admin@amity.edu / admin123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── HEADER (same as original, Amity logo added) ──────────────────────────────
function Header({ user, onLogout, isAdmin }) {
  return (
    <div style={{ background: isAdmin ? 'linear-gradient(135deg, #1a1a2e, #0f3460)' : 'linear-gradient(135deg, #1B3A6B, #0f2347)', padding: '0 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '65px', boxShadow: '0 2px 20px rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ background: 'white', borderRadius: '8px', padding: '3px 5px', height: '40px', display: 'flex', alignItems: 'center' }}>
          <AmityLogo size={30} />
        </div>
        <div>
          <h3 style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '700' }}>Amity University</h3>
          <p style={{ margin: 0, color: '#F5A623', fontSize: '11px', fontWeight: '600' }}>{isAdmin ? 'Administrator Panel' : 'Campus Helpdesk'}</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, color: 'white', fontSize: '13px', fontWeight: '600' }}>{user.name}</p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>{user.email}</p>
        </div>
        <div style={{ width: '38px', height: '38px', background: isAdmin ? 'linear-gradient(135deg, #ff8800, #ff4444)' : 'linear-gradient(135deg, #F5A623, #e8920f)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isAdmin ? 'white' : '#1B3A6B', fontWeight: '800', fontSize: '15px', border: '2px solid rgba(255,255,255,0.2)' }}>
          {user.avatar}
        </div>
        <button onClick={onLogout} style={{ padding: '8px 18px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>Logout</button>
      </div>
    </div>
  )
}

// ─── STUDENT PAGE (unchanged logic, Amity color accents) ─────────────────────
function StudentPage({ user, onLogout, notices, tickets, setTickets }) {
  const [messages, setMessages] = useState([{ text: 'Hello ' + user.name + '! I am your Campus AI Assistant. How can I help you today?', sender: 'ai' }])
  const [input, setInput] = useState('')
  const [page, setPage] = useState('chat')
  const [ticketText, setTicketText] = useState('')
  const [ticketCategory, setTicketCategory] = useState('General')
  const [isPrivate, setIsPrivate] = useState(false)
  const [ticketSent, setTicketSent] = useState(false)
  const [typing, setTyping] = useState(false)

  const sendMessage = () => {
    if (input.trim() === '') return
    const studentMsg = { text: input, sender: 'student' }
    const lower = input.toLowerCase()
    let reply = "I am sorry, I do not have specific information on that. Please raise a ticket and our helpdesk team will assist you shortly."
    if (lower.includes('fee')) reply = "The fee submission deadline is 15th June 2026. Late fine will be applicable after the due date. Please visit the finance office or pay online through the student portal."
    else if (lower.includes('exam') || lower.includes('timetable')) reply = "The end semester examination timetable has been released. Please check the Notices section for the complete schedule."
    else if (lower.includes('hostel')) reply = "Hostel curfew time is 10:00 PM. All students must return before that. For room related issues, please raise a ticket."
    else if (lower.includes('library')) reply = "The library is open from 9:00 AM to 6:00 PM on all working days. You can access e-resources 24/7 through the student portal."
    else if (lower.includes('admission')) reply = "For admission related queries, please contact the admission office at Block A, Ground Floor or email admissions@amity.edu."
    else if (lower.includes('syllabus')) reply = "The syllabus is available on the college portal under your department section. You can also check the Documents section."
    else if (lower.includes('placement')) reply = "The placement orientation session is scheduled. Please check the Notices section for details and attend compulsorily."
    else if (lower.includes('hello') || lower.includes('hi')) reply = "Hello " + user.name + "! How can I assist you today?"
    setMessages(prev => [...prev, studentMsg])
    setTyping(true)
    setTimeout(() => { setMessages(prev => [...prev, { text: reply, sender: 'ai' }]); setTyping(false) }, 1000)
    setInput('')
  }

  const submitTicket = () => {
    if (ticketText.trim() === '') return
    setTickets(prev => [...prev, { id: prev.length + 1, studentId: user.studentId, student: user.name, email: user.email, category: ticketCategory, issue: ticketText, status: 'Open', date: new Date().toISOString().split('T')[0], private: isPrivate }])
    setTicketText('')
    setIsPrivate(false)
    setTicketSent(true)
    setTimeout(() => setTicketSent(false), 3000)
  }

  const myTickets = tickets.filter(t => t.studentId === user.studentId)
  const navItems = [{ key: 'chat', label: 'AI Chat' }, { key: 'notices', label: 'Notices' }, { key: 'ticket', label: 'Raise Ticket' }, { key: 'mytickets', label: 'My Tickets' }]

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f8', fontFamily: "'Segoe UI', sans-serif" }}>
      <Header user={user} onLogout={onLogout} isAdmin={false} />
      <div style={{ maxWidth: '850px', margin: 'auto', padding: '25px' }}>
        <div style={{ background: 'linear-gradient(135deg, #1B3A6B, #0f2347)', borderRadius: '16px', padding: '22px 28px', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: '0 0 4px 0', color: 'white', fontSize: '20px' }}>Welcome back, {user.name}!</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Student ID: {user.studentId} | {user.email}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: '0 0 2px 0', color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>My Tickets</p>
            <p style={{ margin: 0, color: '#F5A623', fontSize: '24px', fontWeight: '800' }}>{myTickets.length}</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', background: 'white', padding: '6px', borderRadius: '14px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
          {navItems.map((item) => (
            <button key={item.key} onClick={() => setPage(item.key)} style={{ flex: 1, padding: '11px', background: page === item.key ? 'linear-gradient(135deg, #1B3A6B, #0f2347)' : 'transparent', color: page === item.key ? 'white' : '#555', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}>
              {item.label}
            </button>
          ))}
        </div>

        {page === 'chat' && (
          <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ background: 'linear-gradient(135deg, #1B3A6B, #0f2347)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '12px' }}>AI</div>
              <div>
                <p style={{ margin: 0, color: 'white', fontWeight: '700', fontSize: '14px' }}>Campus AI Assistant</p>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Powered by Amity Helpdesk</p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', background: '#00ff88', borderRadius: '50%' }}></div>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Online</span>
              </div>
            </div>
            <div style={{ height: '400px', overflowY: 'auto', padding: '20px', background: '#f8f9ff' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.sender === 'student' ? 'flex-end' : 'flex-start', marginBottom: '14px', alignItems: 'flex-end', gap: '8px' }}>
                  {msg.sender === 'ai' && <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #1B3A6B, #0f2347)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px', fontWeight: '800', flexShrink: 0 }}>AI</div>}
                  <div style={{ background: msg.sender === 'student' ? 'linear-gradient(135deg, #1B3A6B, #0f2347)' : 'white', color: msg.sender === 'student' ? 'white' : '#333', padding: '12px 16px', borderRadius: msg.sender === 'student' ? '18px 18px 4px 18px' : '18px 18px 18px 4px', maxWidth: '72%', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', fontSize: '14px', lineHeight: '1.5' }}>{msg.text}</div>
                  {msg.sender === 'student' && <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #F5A623, #e8920f)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1B3A6B', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>{user.avatar}</div>}
                </div>
              ))}
              {typing && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #1B3A6B, #0f2347)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px', fontWeight: '800' }}>AI</div>
                  <div style={{ background: 'white', padding: '12px 16px', borderRadius: '18px 18px 18px 4px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                      {[0, 1, 2].map(i => <div key={i} style={{ width: '7px', height: '7px', background: '#aaa', borderRadius: '50%' }} />)}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div style={{ padding: '16px 20px', borderTop: '1px solid #f0f0f0', display: 'flex', gap: '10px', background: 'white' }}>
              <input style={{ flex: 1, padding: '12px 16px', borderRadius: '25px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Ask anything about campus..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} />
              <button style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #1B3A6B, #0f2347)', color: 'white', border: 'none', borderRadius: '25px', cursor: 'pointer', fontWeight: '700', fontSize: '14px' }} onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}

        {page === 'notices' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px' }}>Latest Notices</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {notices.map((notice) => (
                <div key={notice.id} style={{ background: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderTop: '4px solid ' + categoryColor(notice.category) }}>
                  <span style={{ background: categoryColor(notice.category) + '22', color: categoryColor(notice.category), padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>{notice.category}</span>
                  <h3 style={{ margin: '12px 0 6px 0', color: '#1a1a2e', fontSize: '15px', fontWeight: '700' }}>{notice.title}</h3>
                  <p style={{ margin: '0 0 10px 0', color: '#aaa', fontSize: '12px' }}>{notice.date}</p>
                  <p style={{ margin: 0, color: '#555', fontSize: '13px', lineHeight: '1.5' }}>{notice.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'ticket' && (
          <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h3 style={{ margin: '0 0 6px 0', color: '#1a1a2e', fontSize: '18px', fontWeight: '700' }}>Raise a Support Ticket</h3>
            <p style={{ color: '#888', fontSize: '13px', marginBottom: '25px' }}>Student ID: {user.studentId} | Email: {user.email}</p>
            <label style={{ fontSize: '13px', color: '#555', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Category</label>
            <select style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', marginBottom: '16px', outline: 'none', background: '#f8f9ff' }} value={ticketCategory} onChange={(e) => setTicketCategory(e.target.value)}>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <label style={{ fontSize: '13px', color: '#555', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Describe Your Issue</label>
            <textarea style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', border: '2px solid #eee', height: '140px', boxSizing: 'border-box', fontSize: '14px', resize: 'none', outline: 'none', background: '#f8f9ff', lineHeight: '1.5' }} placeholder="Describe your issue in detail..." value={ticketText} onChange={(e) => setTicketText(e.target.value)} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '16px 0', background: '#fff3e0', padding: '14px 16px', borderRadius: '10px', border: '1px solid #ffcc80' }}>
              <input type="checkbox" id="private" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
              <label htmlFor="private" style={{ fontSize: '13px', color: '#e65100', cursor: 'pointer', fontWeight: '600' }}>Mark as Private — Only admin can view this ticket</label>
            </div>
            <button style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #1B3A6B, #0f2347)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '15px', cursor: 'pointer', fontWeight: '700' }} onClick={submitTicket}>Submit Ticket</button>
            {ticketSent && <div style={{ marginTop: '16px', background: '#d4edda', padding: '14px', borderRadius: '10px', color: '#00aa00', textAlign: 'center', fontWeight: '700' }}>Ticket submitted successfully! Our team will respond shortly.</div>}
          </div>
        )}

        {page === 'mytickets' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>My Tickets</h3>
            {myTickets.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#aaa', padding: '60px', background: 'white', borderRadius: '16px' }}>You have not raised any tickets yet.</div>
            ) : (
              myTickets.map((ticket) => (
                <div key={ticket.id} style={{ background: 'white', borderRadius: '14px', padding: '18px 20px', marginBottom: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', borderLeft: '5px solid ' + (ticket.status === 'Open' ? '#ff4444' : '#00aa00') }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span style={{ background: categoryColor(ticket.category || 'General') + '22', color: categoryColor(ticket.category || 'General'), padding: '2px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700' }}>{ticket.category || 'General'}</span>
                        {ticket.private && <span style={{ background: '#ffe0e0', color: '#cc0000', padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: '700' }}>Private</span>}
                      </div>
                      <p style={{ margin: '0 0 6px 0', fontWeight: '600', color: '#333', fontSize: '14px' }}>{ticket.issue}</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#aaa' }}>Submitted: {ticket.date}</p>
                    </div>
                    <span style={{ background: ticket.status === 'Open' ? '#ff444422' : '#00aa0022', color: ticket.status === 'Open' ? '#ff4444' : '#00aa00', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '700', marginLeft: '15px' }}>{ticket.status}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── ADMIN PAGE (unchanged logic) ────────────────────────────────────────────
function AdminPage({ user, onLogout, users, setUsers, notices, setNotices, tickets, setTickets, docs, setDocs }) {
  const [page, setPage] = useState('dashboard')
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', studentId: '', role: 'student', avatar: '' })
  const [editUserId, setEditUserId] = useState(null)
  const [newNotice, setNewNotice] = useState({ title: '', date: '', category: 'General', description: '' })
  const [editNoticeId, setEditNoticeId] = useState(null)
  const [userMsg, setUserMsg] = useState('')
  const [noticeMsg, setNoticeMsg] = useState('')

  const saveUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) { setUserMsg('Please fill all fields!'); return }
    if (!isValidEmail(newUser.email)) { setUserMsg('Please enter a valid email!'); return }
    if (editUserId !== null) {
      setUsers(users.map(u => u.id === editUserId ? { ...u, ...newUser, avatar: newUser.name.charAt(0).toUpperCase() } : u))
      setEditUserId(null); setUserMsg('User updated successfully!')
    } else {
      setUsers([...users, { ...newUser, id: users.length + 1, avatar: newUser.name.charAt(0).toUpperCase() }])
      setUserMsg('User created successfully!')
    }
    setNewUser({ name: '', email: '', password: '', studentId: '', role: 'student', avatar: '' })
    setTimeout(() => setUserMsg(''), 3000)
  }

  const startEditUser = (u) => { setNewUser({ name: u.name, email: u.email, password: u.password, studentId: u.studentId || '', role: u.role, avatar: u.avatar }); setEditUserId(u.id); window.scrollTo(0, 0) }
  const cancelEditUser = () => { setEditUserId(null); setNewUser({ name: '', email: '', password: '', studentId: '', role: 'student', avatar: '' }) }
  const deleteUser = (id) => setUsers(users.filter(u => u.id !== id))

  const saveNotice = () => {
    if (!newNotice.title || !newNotice.description) { setNoticeMsg('Please fill all fields!'); return }
    if (editNoticeId !== null) {
      setNotices(notices.map(n => n.id === editNoticeId ? { ...n, ...newNotice } : n))
      setEditNoticeId(null); setNoticeMsg('Notice updated successfully!')
    } else {
      setNotices([...notices, { id: notices.length + 1, ...newNotice, date: newNotice.date || new Date().toISOString().split('T')[0] }])
      setNoticeMsg('Notice added successfully!')
    }
    setNewNotice({ title: '', date: '', category: 'General', description: '' })
    setTimeout(() => setNoticeMsg(''), 3000)
  }

  const startEditNotice = (notice) => { setNewNotice({ title: notice.title, date: notice.date, category: notice.category, description: notice.description }); setEditNoticeId(notice.id); window.scrollTo(0, 0) }
  const cancelEditNotice = () => { setEditNoticeId(null); setNewNotice({ title: '', date: '', category: 'General', description: '' }) }
  const deleteNotice = (id) => setNotices(notices.filter(n => n.id !== id))
  const deleteDoc = (id) => setDocs(docs.filter(d => d.id !== id))
  const uploadDoc = () => { const name = prompt('Enter document name (e.g. Syllabus.pdf):'); if (name) setDocs([...docs, { id: docs.length + 1, name, date: new Date().toISOString().split('T')[0], size: 'N/A' }]) }
  const updateTicketStatus = (id, status) => setTickets(tickets.map(t => t.id === id ? { ...t, status } : t))

  const navItems = [
    { key: 'dashboard', label: 'Dashboard' }, { key: 'tickets', label: 'Tickets' }, { key: 'notices', label: 'Notices' },
    { key: 'users', label: 'Users' }, { key: 'documents', label: 'Documents' }, { key: 'escalation', label: 'Escalation' }, { key: 'private', label: 'Private' }
  ]

  const openTickets = tickets.filter(t => t.status === 'Open' && !t.private).length
  const resolvedTickets = tickets.filter(t => t.status === 'Resolved').length
  const totalStudents = users.filter(u => u.role === 'student').length

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f8', fontFamily: "'Segoe UI', sans-serif" }}>
      <Header user={user} onLogout={onLogout} isAdmin={true} />
      <div style={{ maxWidth: '950px', margin: 'auto', padding: '25px' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '25px', background: 'white', padding: '6px', borderRadius: '14px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', flexWrap: 'wrap' }}>
          {navItems.map((item) => (
            <button key={item.key} onClick={() => setPage(item.key)} style={{ padding: '10px 16px', background: page === item.key ? 'linear-gradient(135deg, #1a1a2e, #0f3460)' : 'transparent', color: page === item.key ? 'white' : '#555', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}>
              {item.label}
            </button>
          ))}
        </div>

        {page === 'dashboard' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Dashboard Overview</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px', marginBottom: '25px' }}>
              {[
                { label: 'Total Students', value: totalStudents, color: '#1B3A6B', bg: '#1B3A6B11' },
                { label: 'Open Tickets', value: openTickets, color: '#ff4444', bg: '#ff444411' },
                { label: 'Resolved', value: resolvedTickets, color: '#00aa00', bg: '#00aa0011' },
                { label: 'Notices', value: notices.length, color: '#F5A623', bg: '#F5A62311' }
              ].map((stat) => (
                <div key={stat.label} style={{ background: 'white', padding: '20px', borderRadius: '14px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderTop: '4px solid ' + stat.color }}>
                  <h2 style={{ margin: '0 0 6px 0', color: stat.color, fontSize: '32px', fontWeight: '800' }}>{stat.value}</h2>
                  <p style={{ margin: 0, color: '#888', fontSize: '13px', fontWeight: '600' }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <h4 style={{ color: '#1a1a2e', marginBottom: '15px' }}>Recent Tickets</h4>
            <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #1B3A6B, #0f2347)' }}>
                    {['Student', 'Issue', 'Date', 'Status'].map(h => <th key={h} style={{ padding: '14px 16px', color: 'white', textAlign: 'left', fontSize: '13px' }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {tickets.filter(t => !t.private).slice(0, 5).map((ticket, i) => (
                    <tr key={ticket.id} style={{ borderBottom: '1px solid #f5f5f5', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                      <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '600', color: '#333' }}>{ticket.student}</td>
                      <td style={{ padding: '14px 16px', fontSize: '13px', color: '#555' }}>{ticket.issue}</td>
                      <td style={{ padding: '14px 16px', fontSize: '12px', color: '#aaa' }}>{ticket.date}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: ticket.status === 'Open' ? '#ff444422' : '#00aa0022', color: ticket.status === 'Open' ? '#ff4444' : '#00aa00', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{ticket.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {page === 'tickets' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Student Tickets</h3>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
              {[
                { label: 'Total', value: tickets.filter(t => !t.private).length, color: '#1B3A6B' },
                { label: 'Open', value: openTickets, color: '#ff4444' },
                { label: 'Resolved', value: resolvedTickets, color: '#00aa00' }
              ].map((stat) => (
                <div key={stat.label} style={{ background: 'white', padding: '16px 28px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderTop: '4px solid ' + stat.color }}>
                  <h3 style={{ margin: 0, color: stat.color, fontSize: '28px', fontWeight: '800' }}>{stat.value}</h3>
                  <p style={{ margin: 0, fontSize: '12px', color: '#888', fontWeight: '600' }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #1B3A6B, #0f2347)' }}>
                    {['Student ID', 'Student', 'Issue', 'Date', 'Status', 'Action'].map(h => <th key={h} style={{ padding: '14px 16px', color: 'white', textAlign: 'left', fontSize: '13px' }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {tickets.filter(t => !t.private).map((ticket, i) => (
                    <tr key={ticket.id} style={{ borderBottom: '1px solid #f5f5f5', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                      <td style={{ padding: '14px 16px', fontSize: '13px', color: '#1B3A6B', fontWeight: '700' }}>{ticket.studentId}</td>
                      <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '600', color: '#333' }}>{ticket.student}</td>
                      <td style={{ padding: '14px 16px', fontSize: '13px', color: '#555' }}>{ticket.issue}</td>
                      <td style={{ padding: '14px 16px', fontSize: '12px', color: '#aaa' }}>{ticket.date}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: ticket.status === 'Open' ? '#ff444422' : '#00aa0022', color: ticket.status === 'Open' ? '#ff4444' : '#00aa00', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{ticket.status}</span>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        {ticket.status === 'Open'
                          ? <button onClick={() => updateTicketStatus(ticket.id, 'Resolved')} style={{ padding: '6px 14px', background: '#00aa00', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Resolve</button>
                          : <button onClick={() => updateTicketStatus(ticket.id, 'Open')} style={{ padding: '6px 14px', background: '#ff8800', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Reopen</button>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {page === 'notices' && (
          <div>
            <div style={{ background: 'linear-gradient(135deg, #1B3A6B, #0f2347)', borderRadius: '16px', padding: '25px 30px', marginBottom: '25px' }}>
              <h2 style={{ margin: '0 0 6px 0', color: 'white', fontSize: '22px', fontWeight: '700' }}>Notice Management</h2>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Admin can create, update, and delete campus notices.</p>
            </div>
            <div style={{ background: 'white', borderRadius: '14px', padding: '25px', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <h4 style={{ margin: '0 0 20px 0', color: '#1a1a2e', fontSize: '16px', fontWeight: '700' }}>{editNoticeId !== null ? 'Edit Notice' : 'Create Notice'}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Title" value={newNotice.title} onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })} />
                <select style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} value={newNotice.category} onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value })}>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <input type="date" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', boxSizing: 'border-box', marginBottom: '15px', background: '#f8f9ff' }} value={newNotice.date} onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })} />
              <textarea style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', height: '100px', resize: 'none', boxSizing: 'border-box', outline: 'none', marginBottom: '15px', background: '#f8f9ff' }} placeholder="Description" value={newNotice.description} onChange={(e) => setNewNotice({ ...newNotice, description: e.target.value })} />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={saveNotice} style={{ padding: '12px 28px', background: 'linear-gradient(135deg, #1B3A6B, #0f2347)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>{editNoticeId !== null ? 'Update Notice' : 'Create Notice'}</button>
                {editNoticeId !== null && <button onClick={cancelEditNotice} style={{ padding: '12px 25px', background: '#eee', color: '#555', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>Cancel</button>}
              </div>
              {noticeMsg && <p style={{ color: noticeMsg.includes('Please') ? '#ff4444' : '#00aa00', marginTop: '10px', fontWeight: '700' }}>{noticeMsg}</p>}
            </div>
            <h4 style={{ color: '#1a1a2e', marginBottom: '15px', fontWeight: '700' }}>Notice List</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
              {notices.map((notice) => (
                <div key={notice.id} style={{ background: 'white', borderRadius: '14px', padding: '18px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderTop: '4px solid ' + categoryColor(notice.category) }}>
                  <span style={{ background: categoryColor(notice.category) + '22', color: categoryColor(notice.category), padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>{notice.category}</span>
                  <h4 style={{ margin: '10px 0 6px 0', color: '#1a1a2e', fontSize: '14px', fontWeight: '700' }}>{notice.title}</h4>
                  <p style={{ margin: '0 0 8px 0', color: '#aaa', fontSize: '12px' }}>{notice.date}</p>
                  <p style={{ margin: '0 0 15px 0', color: '#555', fontSize: '13px', lineHeight: '1.4' }}>{notice.description}</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => startEditNotice(notice)} style={{ padding: '6px 14px', background: '#e3f2fd', color: '#0084ff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Edit</button>
                    <button onClick={() => deleteNotice(notice.id)} style={{ padding: '6px 14px', background: '#ffe0e0', color: '#ff4444', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'users' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Manage Users</h3>
            <div style={{ background: 'white', borderRadius: '14px', padding: '25px', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', border: editUserId !== null ? '2px solid #1B3A6B' : 'none' }}>
              <h4 style={{ margin: '0 0 20px 0', color: '#1a1a2e', fontWeight: '700' }}>{editUserId !== null ? 'Edit User' : 'Create New User'}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <input style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Full Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                <input style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Email Address" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                <input style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Student ID" value={newUser.studentId} onChange={(e) => setNewUser({ ...newUser, studentId: e.target.value })} />
                <input style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
              </div>
              <select style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', marginBottom: '15px', outline: 'none', background: '#f8f9ff' }} value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={saveUser} style={{ padding: '12px 28px', background: 'linear-gradient(135deg, #1B3A6B, #0f2347)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>{editUserId !== null ? 'Update User' : 'Create User'}</button>
                {editUserId !== null && <button onClick={cancelEditUser} style={{ padding: '12px 25px', background: '#eee', color: '#555', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>Cancel</button>}
              </div>
              {userMsg && <p style={{ color: userMsg.includes('Please') ? '#ff4444' : '#00aa00', marginTop: '10px', fontWeight: '700' }}>{userMsg}</p>}
            </div>
            <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #1B3A6B, #0f2347)' }}>
                    {['Avatar', 'Name', 'Email', 'Student ID', 'Role', 'Actions'].map(h => <th key={h} style={{ padding: '14px 16px', color: 'white', textAlign: 'left', fontSize: '13px' }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={u.id} style={{ borderBottom: '1px solid #f5f5f5', background: editUserId === u.id ? '#f0f4ff' : i % 2 === 0 ? 'white' : '#fafafa' }}>
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ width: '34px', height: '34px', background: u.role === 'admin' ? 'linear-gradient(135deg, #ff8800, #ff4444)' : 'linear-gradient(135deg, #F5A623, #e8920f)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: u.role === 'admin' ? 'white' : '#1B3A6B', fontWeight: '800', fontSize: '14px' }}>{u.avatar}</div>
                      </td>
                      <td style={{ padding: '14px 16px', fontWeight: '600', color: '#333', fontSize: '14px' }}>{u.name}</td>
                      <td style={{ padding: '14px 16px', color: '#555', fontSize: '13px' }}>{u.email}</td>
                      <td style={{ padding: '14px 16px', color: '#555', fontSize: '13px' }}>{u.studentId || '-'}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: u.role === 'admin' ? '#1B3A6B' : '#F5A62322', color: u.role === 'admin' ? 'white' : '#b37a00', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{u.role}</span>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button onClick={() => startEditUser(u)} style={{ padding: '6px 14px', background: '#e3f2fd', color: '#0084ff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Edit</button>
                          {u.role !== 'admin' && <button onClick={() => deleteUser(u.id)} style={{ padding: '6px 14px', background: '#ffe0e0', color: '#ff4444', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Delete</button>}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {page === 'documents' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ color: '#1a1a2e', margin: 0, fontSize: '18px', fontWeight: '700' }}>Manage Documents</h3>
              <button onClick={uploadDoc} style={{ padding: '12px 22px', background: 'linear-gradient(135deg, #1B3A6B, #0f2347)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', fontSize: '13px' }}>+ Upload Document</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {docs.map((doc) => (
                <div key={doc.id} style={{ background: 'white', borderRadius: '12px', padding: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '46px', height: '46px', background: '#ffe0e0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff4444', fontWeight: '800', fontSize: '11px' }}>PDF</div>
                    <div>
                      <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#333', fontSize: '14px' }}>{doc.name}</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#aaa' }}>{doc.date} | {doc.size}</p>
                    </div>
                  </div>
                  <button onClick={() => deleteDoc(doc.id)} style={{ padding: '7px 14px', background: '#ffe0e0', color: '#ff4444', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'escalation' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Escalation Logs</h3>
            {[
              { query: 'What is the MCA syllabus for 3rd semester?', score: 0.2, date: '2026-06-12', color: '#ff8800', label: 'Low Confidence' },
              { query: 'When is the annual sports event?', score: 0.1, date: '2026-06-11', color: '#ff4444', label: 'Unresolved' },
              { query: 'How to apply for scholarship?', score: 0.15, date: '2026-06-10', color: '#ff8800', label: 'Low Confidence' }
            ].map((log, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '18px 20px', marginBottom: '12px', borderLeft: '5px solid ' + log.color, boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ background: log.color + '22', color: log.color, padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{log.label}</span>
                  <span style={{ fontSize: '12px', color: '#aaa', fontWeight: '600' }}>{log.date}</span>
                </div>
                <p style={{ margin: '0 0 6px 0', color: '#333', fontSize: '14px', fontWeight: '600' }}>"{log.query}"</p>
                <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Confidence Score: <strong style={{ color: log.color }}>{log.score}</strong></p>
              </div>
            ))}
          </div>
        )}

        {page === 'private' && (
          <div>
            <div style={{ background: 'linear-gradient(135deg, #cc0000, #ff4444)', borderRadius: '12px', padding: '16px 20px', marginBottom: '20px' }}>
              <p style={{ margin: 0, color: 'white', fontSize: '13px', fontWeight: '700' }}>These tickets are strictly confidential. Only admin can view them.</p>
            </div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Private Tickets</h3>
            {tickets.filter(t => t.private).length === 0 ? (
              <div style={{ textAlign: 'center', color: '#aaa', padding: '60px', background: 'white', borderRadius: '16px' }}>No private tickets submitted yet.</div>
            ) : (
              <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'linear-gradient(135deg, #cc0000, #ff4444)' }}>
                      {['Student ID', 'Student', 'Issue', 'Date', 'Status'].map(h => <th key={h} style={{ padding: '14px 16px', color: 'white', textAlign: 'left', fontSize: '13px' }}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.filter(t => t.private).map((ticket, i) => (
                      <tr key={ticket.id} style={{ borderBottom: '1px solid #f5f5f5', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                        <td style={{ padding: '14px 16px', fontSize: '13px', color: '#1B3A6B', fontWeight: '700' }}>{ticket.studentId}</td>
                        <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '600', color: '#333' }}>{ticket.student}</td>
                        <td style={{ padding: '14px 16px', fontSize: '13px', color: '#555' }}>{ticket.issue}</td>
                        <td style={{ padding: '14px 16px', fontSize: '12px', color: '#aaa' }}>{ticket.date}</td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{ background: ticket.status === 'Open' ? '#ff444422' : '#00aa0022', color: ticket.status === 'Open' ? '#ff4444' : '#00aa00', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{ticket.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── APP (navigation: landing → login → dashboard) ───────────────────────────
function App() {
  const [screen, setScreen] = useState('landing') // 'landing' | 'login' | 'app'
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState(initialUsers)
  const [notices, setNotices] = useState(initialNotices)
  const [tickets, setTickets] = useState(initialTickets)
  const [docs, setDocs] = useState(initialDocs)

  const handleLogin = (u) => {
    setUser(u)
    setScreen('app')
  }

  const handleLogout = () => {
    setUser(null)
    setScreen('landing')
  }

  if (screen === 'landing') return <LandingPage onGetStarted={() => setScreen('login')} />
  if (screen === 'login') return <LoginPage onLogin={handleLogin} users={users} onBack={() => setScreen('landing')} />
  if (user?.role === 'student') return <StudentPage user={user} onLogout={handleLogout} notices={notices} tickets={tickets} setTickets={setTickets} />
  if (user?.role === 'admin') return <AdminPage user={user} onLogout={handleLogout} users={users} setUsers={setUsers} notices={notices} setNotices={setNotices} tickets={tickets} setTickets={setTickets} docs={docs} setDocs={setDocs} />
}

export default App
