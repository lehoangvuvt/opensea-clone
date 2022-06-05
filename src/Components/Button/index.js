import { Button } from "./style"

const MyButton = ({ width = '170px', height = '50px', type = 'primary', children }) => {
    return (
        <Button width={width} height={height} className={type}>
            {children}
        </Button>
    )
}

export default MyButton