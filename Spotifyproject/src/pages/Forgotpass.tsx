import { IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonInput,
    IonItem,
    IonButton,
    IonCardSubtitle,
  } from '@ionic/react';
  import ExploreContainer from '../components/ExploreContainer';
  import './Tab2.css';
  
  const Forgotpass: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Forgot Password</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCardSubtitle>Username</IonCardSubtitle>
        <IonItem>
          <IonInput placeholder="Masukkan Username Anda"></IonInput>
        </IonItem>
        <IonCardSubtitle>New Password</IonCardSubtitle>
        <IonItem>
          <IonInput placeholder="Masukkan Password Baru"></IonInput>
        </IonItem>
        <IonCardSubtitle>Confirm Password</IonCardSubtitle>
        <IonItem>
          <IonInput placeholder="Konfirmasi Password"></IonInput>
        </IonItem>
        
  
        <IonButton>Ubah</IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Forgotpass;
  
