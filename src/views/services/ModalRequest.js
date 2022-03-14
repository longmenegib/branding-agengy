import React from 'react'
import { Modal, Button, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

export default function ModalRequest({setIsOpen, isOpen, url}) {
  return (
    <div>
        <Modal
            toggle={()=> setIsOpen(false)}
            isOpen={isOpen}
            fullscreen='sm'
            size='lg'
            style={{height: '500px'}}
            contentClassName='modal-style'
        >
            {/* <ModalHeader toggle={()=> setIsOpen(false)}>
            Modal title
            </ModalHeader> */}
            <ModalBody>
            {/* this is the link {url} */}
            <iframe width={'100%'} height={'100%'} src={url}></iframe>
            </ModalBody>
            <ModalFooter>
            {/* <Button
                color="warning"
                onClick={function noRefCheck(){}}
            >
                Request a quote
            </Button>
            {' '} */}
            <Button onClick={()=> setIsOpen(false)}>
                Cancel
            </Button>
            </ModalFooter>
        </Modal>
    </div>
  )
}
