import useFetch from "./useFetch.tsx";

function Example07() {
    const { data, loading, error } = useFetch("https://api.example.com/users");

    if (loading) return <p>불러오는 중...</p>;
    if (error) return <p>에러 발생: {error.message}</p>;

    return (
        <div>
            <h1>유저 목록</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default Example07;
