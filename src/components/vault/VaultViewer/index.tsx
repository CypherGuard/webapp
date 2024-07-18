interface VaultViewerProps {
  id: any;
}

function VaultViewer(props: VaultViewerProps) {
  
  return (
    <p>{props.id}</p>
  )
}

export default VaultViewer;