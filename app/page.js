'use client';

import AboutMe from '@/components/Home/AboutMe';
import Banner from '@/components/Home/Banner';
import Loading from '@/components/Loading/Loading';
import { useLoading } from '@/context/LoadingContext';

export default function Home() {
    const { loading } = useLoading();

    if (loading) {
        return <Loading />;
    }
    return (
        <main>
            <Banner />
            <AboutMe />
        </main>
    );
}

// bg color #0a101e
// yellow color #fec544
// text dim #a9adb8
