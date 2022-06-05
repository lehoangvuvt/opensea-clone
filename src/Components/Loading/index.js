import {
    LoadingContainer,
    DotOne,
    DotTwo,
    DotThree
} from "./style"

const Loading = () => {
    return (
        <LoadingContainer style={{ display: 'flex' }}>
            <DotOne />
            <DotTwo />
            <DotThree />
        </LoadingContainer>
    )
}

export default Loading