export interface IIcon {
  width: number;
  height: number;
}
const IconList = (props: IIcon) =>{
  return(
  <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M5.33333 13C4.96296 13 4.6483 12.8702 4.38933 12.6107C4.12978 12.3517 4 12.037 4 11.6667C4 11.2963 4.12978 10.9816 4.38933 10.7227C4.6483 10.4631 4.96296 10.3333 5.33333 10.3333C5.7037 10.3333 6.01837 10.4631 6.27733 10.7227C6.53689 10.9816 6.66667 11.2963 6.66667 11.6667C6.66667 12.037 6.53689 12.3517 6.27733 12.6107C6.01837 12.8702 5.7037 13 5.33333 13ZM5.33333 7.66667C4.96296 7.66667 4.6483 7.53689 4.38933 7.27733C4.12978 7.01837 4 6.7037 4 6.33333C4 5.96296 4.12978 5.6483 4.38933 5.38933C4.6483 5.12978 4.96296 5 5.33333 5C5.7037 5 6.01837 5.12978 6.27733 5.38933C6.53689 5.6483 6.66667 5.96296 6.66667 6.33333C6.66667 6.7037 6.53689 7.01837 6.27733 7.27733C6.01837 7.53689 5.7037 7.66667 5.33333 7.66667ZM5.33333 18.3333C4.96296 18.3333 4.6483 18.2036 4.38933 17.944C4.12978 17.685 4 17.3704 4 17C4 16.6296 4.12978 16.315 4.38933 16.056C4.6483 15.7964 4.96296 15.6667 5.33333 15.6667C5.7037 15.6667 6.01837 15.7964 6.27733 16.056C6.53689 16.315 6.66667 16.6296 6.66667 17C6.66667 17.3704 6.53689 17.685 6.27733 17.944C6.01837 18.2036 5.7037 18.3333 5.33333 18.3333ZM9.33333 17.8889C9.08148 17.8889 8.87052 17.8036 8.70044 17.6329C8.52978 17.4628 8.44444 17.2519 8.44444 17C8.44444 16.7481 8.52978 16.5372 8.70044 16.3671C8.87052 16.1964 9.08148 16.1111 9.33333 16.1111H19.1111C19.363 16.1111 19.5739 16.1964 19.744 16.3671C19.9147 16.5372 20 16.7481 20 17C20 17.2519 19.9147 17.4628 19.744 17.6329C19.5739 17.8036 19.363 17.8889 19.1111 17.8889H9.33333ZM9.33333 12.5556C9.08148 12.5556 8.87052 12.4702 8.70044 12.2996C8.52978 12.1295 8.44444 11.9185 8.44444 11.6667C8.44444 11.4148 8.52978 11.2036 8.70044 11.0329C8.87052 10.8628 9.08148 10.7778 9.33333 10.7778H19.1111C19.363 10.7778 19.5739 10.8628 19.744 11.0329C19.9147 11.2036 20 11.4148 20 11.6667C20 11.9185 19.9147 12.1295 19.744 12.2996C19.5739 12.4702 19.363 12.5556 19.1111 12.5556H9.33333ZM9.33333 7.22222C9.08148 7.22222 8.87052 7.13719 8.70044 6.96711C8.52978 6.79644 8.44444 6.58519 8.44444 6.33333C8.44444 6.08148 8.52978 5.87022 8.70044 5.69956C8.87052 5.52948 9.08148 5.44444 9.33333 5.44444H19.1111C19.363 5.44444 19.5739 5.52948 19.744 5.69956C19.9147 5.87022 20 6.08148 20 6.33333C20 6.58519 19.9147 6.79644 19.744 6.96711C19.5739 7.13719 19.363 7.22222 19.1111 7.22222H9.33333Z" fill="gray"/>
  </svg>
)}

export default IconList;