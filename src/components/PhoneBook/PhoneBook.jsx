import React, { Component } from 'react';

export class PhoneBook extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    // console.log(event.target.name);
    // console.log(event.target.value);

    const { name, value } = event.target; //делаем деструкторизацию
    this.setState({ [name]: value.trim() }); //обчисливаемые св-ва объекта, после нажатия на input, определяет name какой и подставляет, н-р name="price", то будет price: (то, что ввели, те наше value)
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    const contact = {
      name,
    };

    //при submit в пропсах в форме наша ф-ция addContact, пропс onAddContact
    console.log(this.props);

    //при сабмите формы функцию достаем с пропсов
    this.props.onAddContact(contact);

    // this.setState({
    //   contacts: newContacts,
    //   name: '',
    // });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            id
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
