import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { MdCheckCircle, MdEror, MdLink} from 'react-icons/md';


import { Container, FileInfo, Preview } from './styles';


const FileList = () => (

    <Container>
        <li>
            <FileInfo>

                <Preview src ="http://localhost:3000/files/7e6ef1ef55a7701b8182053ff99c9df6-alex-knight-326705-unsplash.jpg"/>
                <div>
                    <strong>profile.png</strong>
                    <span>64kb <button> onClik={() =>{}}>Excluir</button></span>

                </div>
            </FileInfo>

                <div>
                <CircularProgressbar
                    styles={{
                        root: { width: 24 },
                        path: { stroke: '#7159c1' }
                    }}
                    strokeWidth={10}
                    percentage={60}
                    />

                <a 
                    href="http://localhost:3000/files/7e6ef1ef55a7701b8182053ff99c9df6-alex-knight-326705-unsplash.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MdLink style={{ marginRight: 8}} size={24} color="#222"/>
                </a>
                    <MdCheckCircle size={24} color="#78e5d5" />
                    <MdEror size={24} color="e57878" />
                </div>

        </li>
    </Container>

);


export default FileList;