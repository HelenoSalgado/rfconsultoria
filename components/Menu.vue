<template>
    <div class="hamburger"><span></span><span></span><span></span></div>
    <nav class="menu-header">
       <ul>
        <li class="animation"><a href="#about"><IconsUsers/> Quem Somos</a></li>
        <li class="list-extend">
            <a href="#services" class="animation" style="z-index: 2;">
                <IconsBriefCase/> Serviços <IconsPlus class="plus"/><IconsMinus class="minus"/>
            </a>
            <ul class="menu-card"> 
                <li><a class="animation" href=""><IconsCalendar/> Planejamento orçamentário</a></li>
                <li><a class="animation" href=""><IconsRefreshCw/> Processos Administrativos </a></li>
                <li><a class="animation" href=""><IconsDollarSign/> Orçamento pessoal</a></li>
                <li><a class="animation" href=""><IconsPercent/> Fiscal e tributário</a></li>
            </ul>
        </li>
        <li class="animation"><a href="#"><IconsBook/> Blog</a></li>
       </ul>
    </nav>
</template>
<style scoped>
.menu-header {
    padding: .3rem 1rem;

    & > ul {
        display: flex;
        flex-wrap: wrap;
        column-gap: 2rem;

        & li {
            position: relative;
            list-style: none;

            & a {
                font-weight: 500;
                color: var(--color-primary);
                transition: 150ms all;
                display: inline-flex;
                align-items: center;
                column-gap: .5rem;
            }

            & ul{
                position: absolute;
                width: fit-content;
                top: 25px;
                left: 0;
                height: 0;
                overflow: hidden;
                background-color: #ffffff;
                border-radius: 0 0 7px 7px;
                padding-left: 0;
                z-index: 1;

                & li{
                    padding: .8rem 2rem;
                    list-style: none;

                    & a{
                        & svg{
                            width: 35px;
                        }
                    }
                }

                & li:first-child{
                    margin-top: 1rem;
                }

                & li:last-child{
                    margin-bottom: 1rem;
                }

            }

            & .menu-card-show{
               height: auto;
            }

            & .plus{
                opacity: 10;
                transition: var(--transition);
            }

            & .minus{
                position: absolute;
                right: 0;
                opacity: 0;
                transition: var(--transition);
            }

        }

        & :hover{ 
            & a{
                & .plus{
                    position: absolute;
                    right: 0;
                    opacity: 0;
                }
                & .minus{
                    position: relative;
                    opacity: 10;
                }
            }
        }
        & .animation{
            position: relative;

            &::before {
                position: absolute;
                content: '';
                bottom: -4px;
                width: 0;
                height: 2px;
                background-color: var(--bck-primary);
                border-radius: 5px;
                transition: 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
            }
            
            &:hover::before {
                width: 100%;
            }
        }
    }

}
</style>