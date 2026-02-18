import AdFrame from './AdFrame';

export default function Banner728x90() {
    return (
        <div className="hidden md:flex justify-center w-full">
            <AdFrame
                adKey="7eba84dd8f0aad91c9e31f85349f8f50"
                width={728}
                height={90}
            />
        </div>
    );
}
