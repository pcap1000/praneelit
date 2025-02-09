import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/SideBar.module.css";
import { FaUserAlt, FaProjectDiagram, FaPenNib, FaBars, FaPlay, FaPause } from "react-icons/fa";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const location = useLocation(); // Get current route

  const toggleMenu = () => setIsOpen(!isOpen);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    setProgress((currentTime / duration) * 100);
  };

  const handleProgressChange = (e) => {
    const manualChange = Number(e.target.value);
    audioRef.current.currentTime = (manualChange / 100) * audioRef.current.duration;
    setProgress(manualChange);
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="src/images/Warriors.mp3"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <button className={styles.menuToggle} onClick={toggleMenu}>
        <FaBars />
      </button>

      <div className={`${styles.sideBar} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.navMenu}>
          <ul>
            <li>
              <Link 
                to="/about" 
                className={`${styles.navItem} ${location.pathname === "/about" ? styles.active : ""}`} 
                onClick={() => setIsOpen(false)}
              >
                <FaUserAlt className={styles.icon} />
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/project" 
                className={`${styles.navItem} ${location.pathname === "/project" ? styles.active : ""}`} 
                onClick={() => setIsOpen(false)}
              >
                <FaProjectDiagram className={styles.icon} />
                Project
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`${styles.navItem} ${location.pathname === "/blog" ? styles.active : ""}`} 
                onClick={() => setIsOpen(false)}
              >
                <FaPenNib className={styles.icon} />
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.horizontalLine}></div>

        <div className={styles.musicPlayer}>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUWFxcaFxgYGBgXGBgYGBcXFxgYFxYYHSggGholHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUvLTAvLS0tLS4tLy0vLS0tLS0tLS0tLS01LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAEEQAAEDAgMFBQUFBgYCAwAAAAEAAhEDIQQSMQVBUWFxBhMigZEyobHB8EJSctHhFCMzYoLxB3OisrPCJJIlQ1P/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKxEAAgICAgECBQQDAQAAAAAAAAECEQMhEjFBIlEEMmFx8IGhsdETFJHx/9oADAMBAAIRAxEAPwAJpIdSlyTwpLTmr5uz2Cr/AGcn9UwywhHegPbdOxAqzkAhMVGEIBCaAgi0Bqthim1qYgpUi5J08W0uLZ8TdQbH+3NFa9FNBYyHclIPS4fb9FhelQrG2EnRS73KTNikmYsiwKias8eaOIcg9fEXvpuUTUQS3OcpAdwB5X+RXPYvFvYWua4NaSRDw43G7NOnA8jey0hj5aQnKlZ0jnFRL9UlgsZ3jQ4efI8E00qHGtMadhWFaL0Oq+NFEvSodhJRJSgcitcmIOYSVc3R860aYKEIXai02KX7Idx9UZlEptggYBCLTMqQYiNaJUFI36rSLnH1CxIdjLRKkWKbN6lkSKFarOCVeYVg8WSeJ3Dh80xCdapKA4o1UJZxVIQZjlWVtova6Whrmcbgjk4XPuViDCUxD2b2g9Zb6PGn1otIV5Vmc7B4mHtzPY/+VzRJHQtn0ISzcaWaPDwNzvCf9V/OT0TLH0GzlrupdXNd/ulEJa4T+1U3D+k/Ax7ld12tfr/T/kz22Bw3aCkbGR7x+fuWYvbNJu9xHJp+cJbE4Sk7/wC1h/Dl+SrMRQaz2SXHo8fCAtY48cnqxNzSLrDbVpO0eOhkH0Oqco4gOEtcDzn4risU18jOMg55vgXT6IZqOYQW25iQf/bX3rT/AFk+mZf5Wuzt+/kgGQetj0I1/tySONbNJz3VRGUHKbgmNAOH6KtwGMc9uVzrm3iEi+kxcX3+kKeO2XWDR7WUARADhboZ3clmsajKm6NlN8XqzfZvEkEsJmQHNvyAMcV0DKi4wPLHB7QHOa6SdCZ1BHmfVdJQxQc0OboUfEQ3yXkWGWqG3PWZ0EPWArno2GGFFal2jmj0ypYEoRGhRRGhIAjSptW6dNTAhAGg1bZTupSpUjKQyHchYj5PqFiQxlYStsKjVUlgqtRIVnI1R0apOsmhAapQC5ErIDirRLCB6iahBBBiFFq05USw37cGj94WHhmienPyQm4ku/hYdjuZGUesIZpiZjxcYul+8fmJquqOpAEhrXZSTwgQI6lUoohtoeqVnD+I6lT3Bu/yEj4IGMBy2zc3OPdj0Ee8FLHFuaSaTKTATDbBzuhgxm845pltA/bcatX7s+zPGLNHlJt1T48d/n5+pXKzm6+FHiNgN7oytB+LnclXCJjdusJ8+C6DHiSGNh9TiB4KfJjdJ5+87ql2EhpdMgAnrz6WPpzXoY52tnJOO9Fr2N2cX1nEaNb4hqCToCOUHmrevh6QJEMmbgAyOUTbqTCF2AeAKvHM2eOh/VF2galOvuFOpYkicjtxbwmAN64ck5SzyjfSOjHFLGmU20cI1x8IHg9omIE6CwjMbeEevDWxSQ0gnfIHomqkO8LQQwXuI13uGocRMDUNkm5AQ6LPE63D5mPQre/RTI4+qx4OU2lADSpNCwaNUMgozSlGn0TVNZtFBaOseiaYEvSMFNtadVLAO2ykCojXqiwpAjCjSHiKkoMN0AMysQ1iRVjJK1UZOhWp3qDnH0Uli1RqWePVOPdN0vUppiK2uoFMVKaA4K0yWQW4WALZaqEaOig5tlMhaITRLQpUw6GC5gLWkZSZIgQbRB3kcphMVSkata61jbIaB4moSMjWwCQXHVzj9qeRva3pZAxtfMHAMgWAB+6OMbyQOVvWwa+UOs5o6m31zWkZbJaQhs7adTDuloBLyJBFrHhxg+9dLjcUa1MmBJE9D1XM7XbApuAsAfU3TuBx0U8oHiI8pIAATyY1KppbHCdXFhalYBvhBAcAYJkkugmTvN7n8I0UcC4mSd5J/L3JWlTJzNHAR0IvHv8AVP4CnASlSVEuxsMQ3BFnehuMrFlwdkmhGphDARWqGaB2FN0X7ikmFHYVIh2meC3nSzKmn16IzSigslKlKiAsBukBOBz9QsWoHALEDGmuUXm6wPhQe8LM0ImAVGoRHNLYmsZDWwC90SbxDSTbj4feid9a+osfJOgEsQ5AhbrvvZDc+ASbAXn5q0ibJrRKFSrBwBBBB0IVjgNlVazS9jQWtJBuBcAE68iE6oLEfJacrFmxqxpd8GyzLmmRMdNUPBbIrVml1NuYAwbgXid5QIqa+iTdRkp2q06evluKsH9nsR3PfBgLMofZwJykTOWZ0W0XRJQYmqWtMRI4kC3mqmmS59zJuOnEX95+Oiu3YIO9oSk62Ak+FlwJcScubyB0nzK6Mc4rRjki7s1jYfTjNmIv15NHDd/dK7MkNzHS+XqBc+WilUqvY5hIgk24Zb/3jmoYusXaHTN/qa0/HN5grRJ1Rm3uxjZlcmoJtIiOhKu2gzCo8IM1ank1Jy+ZMX8wux2jsqrQaHVGQDYEEOE8yNP0XPm1I2irRXPpqLaaewGCfWdlpiXRNyBYQNT1TlDYFdzntDRLCA7xNsSJ48FzuTNIpIqQFIFW9bsziGgksEAEnxN0Ak71R1TlElJbKDyjNd9BJ0HyJgjrqORTLZ4J0Sw7XT7kzTFrpaky+sBFxRHeUwBHtacI3+cKW90Ci2rGC4KGa/6KNTcp5kCJ94FihIWJBYeo0JR7jnYBoTlJ8jl8pEeaaLuW75JGvUtbcQ4dQQR7wpRsFrU4qMt7JJI6tLQRO6Tpz9K/F4j99l4zPkCfkn9pYizagvv8t49FzFXE/wDlsE2zW5hwt8VeKLl+iZpOox+5aual8TBLGH7Rv+Ftz78o8068Knr1wKrzNmNDfM3PxHoqgrZnFXJWbwr5LwNA63mAV6J2GbOGq/jd/wAbF5zsFs0i77z3H0hv/Vel9gx/4tb/ADHf8bFc16qMpO1Y/wBnnNbg6LnEAZWi/Fzso95ARtl7MGHFb/8AMuzjkMokeUHyhVFYf/ED8DP+VqZ2FtkYjCVWuM1aVNwfxILDld5j3hJRvRDb7KbttsUCMTSux0Z40k+y8cjv5xxXQYDFso4TDvfZpZSaTwzNABPKVQ/4b7Y77Dtw1bxZqfhn7TSPEw/Ecp4Lo9sbDNTCtw9Mjw5AC6dGcSN/km4hfhnJ9rNg9y7vWD9086D7Dju/Cd3pwVpg9n0cPgu9qMzOe0Ejjn9hs7gAZPmr3ZGzagw5oYjI9sZQQSZZuBkC43HpwWts7JNTC9027mBuUneWCL8yJ9UuPkOfg8mx+D70y6JbJbAAjlxIQ8Tg6T6Uhjm1I8URlcRe41+gvRdl7YbRYyg/DvNRog+ESTJOmu9dBUrtZRNV9MMgElpDZ5AxvNrc1UZyrscqvo8xpdljSOHqgHx1aMzc5iZ1Xp9enTeO5qQczZyneBEkdCR7kltCn+6wn+bh/gqft/Vcx9F7CQ5rXlpGoIhE5N7YkrpInsbYTsPjCLmm6m/I7+pnhd/MPf6xabHZ+/xX+Yz/AIwhdju0bcZSaTDaoAztGh/mby5bvQlvZA/f4r/MZ/xhJxphK12cljcXjWN/el7WukeJrRMgyNOErldtuysad2ds9L/OFe7V2vUr5e8jwzAaIF4n4Kn2vQ7yi9o1gEdWkO+Szg1zXsbbS+oDB1PGR94SOosfUR6KzptXJYfHwGvIM0yCRvjR3uJXaAWkGQtMsHFhOSk20LvrQ5rbXQ6NSapqG4DSxo4uJaT5AAeoVPtrF5MRbcwR1LnK62DQOU1HaAW+JPqonHjHl7mmKpRpg6RccQ7xeBrBLR7Od1xA3Q0e9Pk2S+CpyC777i4nrYf6Q1Gemzmk9tmr/RWlpYkSPBJ12xbzCMyqlq5JJ+oWSOgD3k03M3gmPiPcfcueqYUsc2q4eydDMiDLTzBPh9F0VF4ZWaT7LxlP4hJHqP8Aat9osHbMP7g7lrjnxlXhmjqcK9iNZ4DS7cAT5ASuWw2FrV8tOk3NVrF0CQ2bOebuIGjTv3KzxVeME4k/ZydfF3fwVMdp1KBp1aLslSnOV0AwS0tNnAg2cRcb10fDwauvc5py0/sd1geyWKp0mN7qcrRMOYb6nR3ElPbI26/CMqUTRJLnEnMSwiWhsFpbynzWtn9qMUGMc6oHy1pIc1oBsCfZAjyXQdpsOzEYVuJaIc0NdzykgOaTvgmfI8Vz9ttdh7J9C78HjDhP2X9lAgAZ+9pzZwd7M8uK4qvh8bs7NiH0Hhri9tSC1ze7eMvicwkNgBpBNpAXf/4hbXq4ei11F+Rznlsw03ItZwItr5IXYftBUxYr0qwD+7DAXQAHCoHgtcNCfD6OW8FTJ9XBvX/pwGwXOp0qLmmHNYwg75ABXdnauIxtIsp0IgtLnNfF+F414SubbszNiTh6QsHua3g1rSRJ5ABehbP7qgWYVntBheeOoGZ3Mk+g6LFXJsqTSS9zhq3e0nw5z2vYR9qYNiNCQdy7DDbRxb2AjCgGNXPDZPHIRIHL3qOBwDXYqvWfEMcA2dAcjSXdQCI81RY/tdVc490Qxk2sC4jic2nRJentg/V0i6x3aOrRH73CuaToc4LT/UAR5LmtobVrYtwYBafCxgJvxPE8/grTDdrGuplmJpl82OQNhw5hxEHp7k/sejSwuFdiIJL/ABCYDspP7tsjSxBPMngm/V50JenxslWo4p9OkO4YO6dTfHeiTk3WbAnquc7XYupUewVaJpFocIJzZgSLgwAdN0o1btNiS7MHhon2Q1sdLifer+g9uPwzmuaA9pj8L4lrm74PDqOaVqWkx047aPNuz2xMfTojEU6bgGS5j2uYSQ0kewHZjoQRFxK6nZ3a0tL6opB3fZH+1AHgAtY9V02wKrKOCpOe4Ma0GXGwGaoRc7hJ1VT2p7OATWottq9g3by5o4cR5rTJbXJAp8vTLxoNtrb2IpUy2rhgwVA5oPeh2og2A5rnML2ZxNRmYU4BFsxDSZ5Ez6rr+04Z3mFzxl7286fZ15TCztKMYHMdhz4QPEBlnNO8O1ERYc1Ljt34JjKkq8nibtmVaFV9OvTcx+sO3g7wRZwN7gnQ8Ff7ExeagzkC3/1Jb8AEp2o7S18TXd3zO6FIuaynlIc0EiS4uGYkwDw0gcVtjYkNw7zPsuf6mCB6uC6M8XKP/CoPSI16JxFcvbFjDZ3kaD59TzXUVa2Sh3YEPPhjmbbkh2WwejiNBbl9fNMYyoHV43ME+ZkD3By5ckuU1Hwjo1CD9wswABuAA6BRJUyVAXITOM3HL4LalHX681iAItBA8tefP8/owzbo0Rs8tgiDHr0SlN0Hlby/RZHSRxlIljg32olv4hce8I2Gxn7TQAGsD4KRmVQYPFHDYgscIaXEsO4tcZEHiCYVqPKLrtbKhJRls3tjZdVuHLJklwdl4XnKDv3efWFyz2FzYAJPBerY6k2qzqFyeFxBweLZiA3OaZdacufMxzJzQbjNwvHUno+Gz2mn32ZZsXlFtsCs2uwC4ytAjS4AmeF1YYvtHVoUXYYtBZlIad8TmdJ3nU9Ol+Wwm2pxVSofCKpzRMgE7pi+h9E3tHGZ8rftEiOMzos3BxyfRlRipQtnd9r9qUKjcHWc0VKPeuztPAsIJEfaEkjpzRe0mMfgqVFuBoUxSrPh1Rl8pcJa4NA8RcBAcSbwIMhecYqs6mO5PsgOc3zEQOiueyn+ILqFKnhalHvYdDHZ8uVo8TQQWmcpFj04LdK1aMZRpJfU9B7N7FOHpOcQHV3iTJ03hma8CdTx6BL7C2NiKeIdXrlhL2unKSTJLdxAsAI9Fy21+0FWu/MHOptAhrWvIjiSREklE2Ft19F5c4vqAtIyuebXBm88PeublG0PhKmztMDWD6mKok3zTzyvpsbPlHvC57ZtRuCNRmIpFxcRlOVpBAm4LjvkKuq7VccQ6uzwOJkCZ3AQeIMLoMN2uBEVKRn+UiPQ6epS5p+R8GvBb7Lq064Lm0MrdxcxgzfhifVQ2lSbicO9lIixgRYZqbvZ4AWt1Co9qdpalRpbTbkBsTMujkdyqtm7WfhnS24OrSCQQOmmuvNU8i6Esb7E6lItJaQQ6dCL9IXZdm8OcNQfVqjLPiIOoa0WkbiZNuiCO2dOJNJ07oLSPI/oqTbO3n4jwxlYD7IMyf5jv+ChcYbTsp8paaoe7RuJ2HWO80T/AMioP8MO2jrYTEO8IYTSqE+yGkDu3nhcQd2nBI9oe2wbhn7PNA3pgCpnEXOb2MvzXL9mMOTVnQZSD0JB/wCq7FrDbMlHlOj0TtDtxuLqiiwEU6Zu7e6Y3bhbr623ju0lXBUi9rg8NA8DySDugOMlvvHJczs55Y94Me0d4nXX0Sm1No95Ua0HwtMnqLx8PULlSk8n0OuWOKgdl/ihhWVsDRxWTLVmnH3stRpJpnjBv5HiVwmyNjPc3KTfNnI3AwBBPEAe8ro9obYqYltNpGVjR+7aLxaO8cd7iNOAJ4pvBURTaqy5+K4ozx4q2xGhW7lsb1W4NxcXPP23SPwizfW5/qS+LxBxFcsbZjR4zwH5nT1O5WGWNFCjxW+2XklydImHXRmFCpaJhwEBOzmcQfehYp5CsQFBHXEfUpVph0Hfofl1TOVDey4WSOg24Rppw/L6/VbaGDbWZlPkeBTLrdPgsjeP7pptO0IQ2DjXtJoVfab7xuIO8J3H4MPvGmnVCxlDOA5tnsu2fe08j+RTGCxoeyY115EagpT75xNYPVM5raVJrRJpjMD4tQHMOsgaOBAMjgmtm4Mky0Zedy7pmMlXmM2ex4M3m3UKn2Tju4e6lU1aYBNpb9kknlw4LZZXODUexcVFhNv7PPdg3JbfnG8eiqDhqbA2pAkGWkfMbwuo2jjmPAEgkxH1CqhhqZ8L81tIMW3eiMWRqNMJwTdhcJimvbmHnyKtsDiqeUBzC430AFidc0ySBpYRz3U+G2ZTZm7uo6+odBHuA4pnDjLY68dx8/kok42+Jnxfkv2YulM92I+7lbF3F05pzaHLHC627EslhyiGkzLQJl0/ZMGxiIGnpW01t5WdjosqGMpACWSZudftAkQfwgf1O5KL8fTgfuxMUwfC0zkJLvWfzlVTnIT3Kk2JpFl+3sDYyyfD4jTZeDN2AgC1rHdztV4zFtbmfMMEm8SBNtN/RQBLtAY3nUfqVDHYOlVbkdm1mxuY9yerXIFF+Dnu/bWqF72iNwO4D5rpOzuGBkxE7uA3D0AVZU2PTpwGl5k3kgx6AK0w9Xu5A9FrmmpRqBrhx07fYztbZobeARunUcgRceSqMPgqbgHQSSPCweyG7iSTJJufROYraDqngbMwMx3Nm09VabOwjWtE7gPduWPOUI0y2r2awGHytvc8UltbGkxTp+2fcN5PIJzG4nKwx5JLCUMsuPtO15cB9c1EFb5Mib8I1gcC2m2BvuTvJ3ko5p8FNb3Km23bM6ARvRAbLI9eCEaZ6fXH66ppiaDSsQ+65n1P5rE7J4jMaLCod4OfofjC2Hg7x6qKLIPF1HJw9PyRsq0GosCMCJH11SPeCk8uI8Dz4uDXfkePHqrI09+9RfRDhBGtoN9fiE015AiQbFrpbuSm1tkiuyfZqNs13/V3L4TKq9p7Ee05qD3N1JYCSLb2A9fZ9FHB9oKjLVBI49Pj8lpHFJVLG7/kr/InqSMwOCIMOs4GCCbgjUQFa/skiRYjQrMTWZVy1WHWGv6/Zcfh5jgrHBUDCjLkfZpBaoSpUfva8f7gpgNZzHT6j3Le1sNDSRZUeHruvJSjFzV2N0XrqYF2utwNvQ6eVku+p5HekaeM8MJXE7SAcATcGPJXHHJujGVLZZl901hMKw3e6eWg8zvXN1NogOibb+m4K5rVIa2N4BROEo19RwSZc4mqxoiBA3folGPaQcjQPT5KnqYoucBuLgrfYzAROomFlKDitmqoXrULSdVS4pz3kMYYc45QeG8k8gJK6zaVAALlamKDajnCLQxvLe93wHktMDbsJPRc0aLKFMNHOSdXGYLjzsgbQ22ykAC6/Aa+m5c7j9ruqPy0/LgPz1VnszZAiagzE3M3LvxcuQ81bwKPqyMyeXxAdwWO78BwaWsGk6uPHongFFg4fp0Rsse0Y9yydeCd+TA3zK25h9OH5og5CBzt7tfgtGlJk366eiQA7CwH5ev5KL6R/t+f9kwWypuCLGJ931WJhYiwoCTZbJlbIsspoAynSHAeVvgpihzPrPxlGptsitYlYADScB4SCf5h63HKVBtCLzfj7tOCsSxDDAJRYUI5SXCRuOnG3oYneq7auzmVJkQ7cW6mBPiaddNbcjuV5UpSNJ+aVfScbuzW0AsNNSZ8R9w4SJVxk07QmjhMVhquHJP2TaQZY6d0j2SeCfwHaepTEEA/isfrmusqslpDgC02IIzSIMiBaLDWVyu2Nk914gzvKOtruZO8HUt943rqjkhk1NbM/VHphMXt2rXbADGjjmB9wVDUrvZ9oHjYjrqg4lrLFjrc7kf1D5oVM5rODnHcReF0QxxitdESyNllQ2iIl1khWc97nOi2vluRaVOk2C4knhCsZzNO4bvzTtRdpD3JU2U9DEXM71ajafgaOG9VFGkDIOoQgL62VyhGREckolkcWd55hT2XtipTJDXwDfTN7tUscL4cwBI3RdApOIcSbeV/IKeMZJobnJNF1X2vWqHKXk8bZYHO5hJ4XAvruIaYaLE6AcOpPvTuy9mmpdxys4fe/PqV09GgAA1rRl9Bre31K555Y49RRdOXZXbO2Wyg2QJdN3akDeRwi/FWtOmOZ5a/XnZMtp3Gmh58EPDYV1w5wIzS2AWwIiDcyfRckp8ttmiVaQZlPoPefyCmymOHzPqo0YY4t8V/ELOdaADfjO7mmG9D7v7rNlEQzeseEcB3AepPyCg6kePoPzlIALaZFljrIoZxnrJHwUHUmk6C3mdEwFu9b94eoWJuOXxWIAVA+vJDom6KAt4aggBmg1GyrdNqkQkM3EpYt8R8vr3JtoWnU5M2j6j5oAExik5tijZEOuwkWuRcDiRu1QAvk0P1ohmiJiLEabudtN6aIJGkdfyCE6ncTfUcuOnlvTEebbfp9zXc0SLyJALYPCRNtNUBgdUEF0DgLD0sF3m3tkiq2bBzJLZEjS4I4Lmtn7UpklrqQAFs7fZPUGY967oZrhaVtGaguVNlS7ZtX7IB5hzC74ym8PhaoBzUqg3SWuM+cQupw9CmdKYPQj8keoWtH8Fvm8N+Sxfxbeq/P+m3+uluzzrHUCHzBbPEELdMtbOYZuMEe61l2+N2pk1pMaOLqvwaGFx9FQ43a1R/8NuUfeIgHo2TPWT0C6YZpyXy/uYyxRi7v9ioNKZcwEAa5jH+qAEzhsK1xzOLiBxNvgJWnYdziHVHE9bAdBoArHZTBUqhrYyt8TjxjQDlMenRXOdIlRSey3wTQGiRfXpuGnAWT9IknrzWmUOPqmabYub89686Ts1CsaZ0tAj9R6ItAgiRcfHch1KhiGm5MT92dXQeAkjiYTFFjQ0NGgAAHACwUMZsAogW1oJDJNCkQoiVvuygCKG9t0aENuqAId2sRPr6ssQAlTCYpBAYbpijogQYKYUVIJDJhSWgpIA1C1CktIA0l8SYLevxsPimUtjZy21Ee4z8k0AntWj3jSwGMw11tO8bwdI5lcVjsO8ONJ5piLkU/CIOhcTJaF1eJx0C4udfrzXJ7QfnxRkhjSGmeMAD4yunBdshszB7IB+088gSP1Hn6K5obGLRIimDvHtnz9o+sJrB4ljQG02H0lx5gbh/MSBzT7KNV9ye7HI+M9XkQ0cmif5llkzTb9vz2N1GMekUtXZdNgBIhxNi67iI+zTAknoCUri8MWDM7LSH3qt3Hm2mPmfJdC9jKQMODTvLYzu61Hkud1XJbWxjZs2XE6kl7j5lXhcpv8/P5B6VvQkMP31SGlzh942noOCv9j4ZlNzw0zZoJ3ZhmkDpP1dcw6rUY65dfUAxA5xcLpthWpAm5dfhAOgA6Loz2o96OdNe2y6CNSYTqlqL/RP4dq4WWRNBhe15HiYHBpk/agG2h0GqaaxaWg5IAoapBqxoUkDMC2VEBSSAG5DRXKOVMAcHgsU8g4D0WJAINCOwpZrkwwFMQw0ojEu0FHagYUKRUGqSQGLa1KxAGIVQqRegPrXTArsdhLE8Fxu0WH9otrlHkJOnNd1jMSC09F57tW2IkEgw2CZI9w0+crp+G239jOVJo6rYuNYBAy5t/EnnxRdqbe7uxpmVytWvScy5LKo+54p5iNE1h9o1y0NGYBn2nAF9+ZFvq6T+GXLk/wB/7Oj/ACJukWI76sJc0U2c4zH1sPNJUsO3OQ0sJ3ZS508S5wHzCtm7ODw3xeKJJc7NHQHTqFW4io5uYUKhdudVJ8DeIp/ed0slCV2ojf12JbYrCkDTdGc/Zb9nmefVW2BPgbEAZRpoBG7kuPxNNt3SXX9p2r3b4HDiV0mwz+5ZPA/ErfLCoI5XNylsvKD1a4VUtAqzw7yuORaHJUmjehgIjXKSggUgVBpWyUgJrRQy5Qc/cmBKrb65rRKWfT5kwOUm83t9QttkWN+BOvmmIYv9f3WLedYkMqaadpblixAg7UVqxYgYVYsWJAYsW1iAFqqUrarFiYCOJXG9of4n9Df97lixdPwvzmWToNsXTyTjvbWLFrP52dGP5UF2v/Af9bwk8b7DfwhYsU4ul92N9v7FLW0Z+B3+9dLsP+Czz+JWLFr8R8n6/wBnJH5i0G7qrXD6BYsXBI1QyUVqxYoKJFacsWIAAVtYsTAkEKutrEAIrFixUSf/2Q=="
            alt="Enemy Song Cover"
            className={styles.songCover}
          />
          <div className={styles.songDetails}>
            <h3>Warriors</h3>
            <p>Imagine Dragons</p>
          </div>
          <div className={styles.progressBar}>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={progress} 
              className={styles.slider} 
              onChange={handleProgressChange}
            />
          </div>
          <div className={styles.controls}>
            <button className={styles.playButton} onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>

        <div className={styles.horizontalLine}></div>

        <button className={styles.resumeButton}>Resume</button>
      </div>
    </>
  );
}

export default SideBar;
