'use client';

import AboutMe from '@/components/Home/AboutMe';
import Banner from '@/components/Home/Banner';
import MySkills from '@/components/Home/MySkills';
import Loading from '@/components/Loading/Loading';
import { useLoading } from '@/context/LoadingContext';

export default function Home() {
    const { loading, theme } = useLoading();

    if (loading) {
        return <Loading />;
    }
    return (
        <main className={theme}>
            <Banner />
            <div className="dark:bg-[#0a101e] transition-all bg-white">
                <AboutMe />
                <MySkills />
            </div>
        </main>
    );
}

// bg color #0a101e
// yellow color #fec544
// text dim #a9adb8
