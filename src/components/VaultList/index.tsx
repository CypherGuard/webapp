import Vault from '../Vault';

function VaultList() {
  const list = ['test', 'test2', 'test3']
  
  return (
    <div>
      <h1>Vault List</h1>
      <ul>
        {list.map((item, index) => (
          <Vault key={index} />
        ))}
      </ul>
    </div>
  )
}

export default VaultList;