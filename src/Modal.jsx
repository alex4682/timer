import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    
    if (this.state.isOpen && document.body) {
      document.body.style.overflow = 'hidden';
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);

    if (document.body) {
      document.body.style.overflow = 'auto';
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isOpen && !prevState.isOpen) {
      if (document.body) {
        document.body.style.overflow = 'hidden';
      }
    } else if (!this.state.isOpen && prevState.isOpen) {
      if (document.body) {
        document.body.style.overflow = 'auto';
      }
    }
  }

  handleKeyDown(event) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <>
        <button onClick={this.openModal} className='open'>Open Modal</button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>&times;</span>
              <h2>Modal Title</h2>
              <p className='modal-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit molestiae cumque quidem sit tenetur facilis ex delectus, eaque temporibus sed ea aspernatur! Quaerat reiciendis quod, eveniet necessitatibus quo consectetur voluptatibus est! Culpa laboriosam quisquam quod, ratione eos quae voluptas ad magnam eaque obcaecati consequuntur fugiat ut inventore itaque at! Dicta voluptates repellat placeat ex fugiat quam tempora molestiae totam culpa. Ipsa incidunt natus ducimus animi rerum architecto eos repellendus fuga iusto praesentium? Fugiat asperiores odio cumque cupiditate libero? Placeat, ab exercitationem! Architecto, ipsam consectetur ut expedita fuga numquam libero culpa accusantium minus voluptatum dolores asperiores possimus nobis repellat beatae non nulla assumenda ipsa quidem excepturi? Quisquam voluptatem, architecto tenetur suscipit odit aspernatur minus ex, excepturi illo exercitationem ratione eius eveniet alias impedit accusantium veritatis modi praesentium illum ipsa labore aliquam quidem quod maiores officia! Architecto sed id dignissimos tenetur aperiam mollitia eveniet cumque! Minus cum velit praesentium quidem animi distinctio? Recusandae delectus, nisi enim veniam, nobis voluptatem quod illo repellendus placeat, corporis ratione? Magnam numquam similique ab officiis veritatis odit esse atque eveniet suscipit facere deleniti animi quasi, adipisci dignissimos nemo ipsa velit aut rerum doloremque porro quibusdam eius rem. Necessitatibus sit laboriosam rem? Vitae a esse beatae neque animi veniam, magnam alias explicabo dolorum, non minima ullam, minus quod nulla voluptates porro! Dolore rerum ratione consectetur excepturi, quidem quasi recusandae ducimus, vel necessitatibus libero ipsum voluptatum natus reprehenderit sed nihil amet sunt nulla nobis quae architecto assumenda maiores. Nobis eveniet incidunt repudiandae eius, possimus labore dolor quam aspernatur.</p>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Modal;