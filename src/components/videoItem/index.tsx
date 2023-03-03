import { Button, Container, Details, Thumb } from "./styles";
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { RiAddCircleLine } from 'react-icons/ri';

interface IVideoItemProps {
    addMode: boolean;
}

export default function VideoItem({ addMode = false}: IVideoItemProps) {
    return (
        <Container>
            <Thumb imgUrl="https://prefeitura.rio/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-16.42.03.jpeg"/>
            <Details>
                <strong title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur fugiat soluta nesciunt, consectetur deserunt odit inventore harum incidunt? Commodi atque nam facere, inventore quae reprehenderit consequuntur a aut voluptas">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur fugiat soluta nesciunt, consectetur deserunt odit inventore harum incidunt? Commodi atque nam facere, inventore quae reprehenderit consequuntur a aut voluptas.</strong>
                <div>
                    <div>
                        {addMode ? (
                        <Button>
                            <RiAddCircleLine />
                            Add to list
                        </Button>
                        ): (
                            <>
                                <Button>
                                    <BsFillPlayFill />
                                    Play now
                                </Button>
                                <FaTrashAlt size={12}/>
                            </>
                        )}
                    </div>
                    <span>
                        <AiOutlineClockCircle />
                        15:39
                    </span>
                </div>
            </Details>
        </Container>
    )
}