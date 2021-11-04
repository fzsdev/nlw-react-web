import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);

  //console.log(user);

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e deixe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="30" />
        Login com Github
      </a>
    </div>
  );
}
