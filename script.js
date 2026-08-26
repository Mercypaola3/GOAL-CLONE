
                        const mobileMenuBtn = document.getElementById("mobileMenuBtn");
                        const closeMenuBtn = document.getElementById("closeMenuBtn");
                        const mobileMenu = document.getElementById("mobileMenu");
                        const overlay = document.getElementById("overlay");

                        mobileMenuBtn.addEventListener("click", () => {
                            mobileMenu.style.left = "0";
                            overlay.classList.remove("hidden");
                        });

                        closeMenuBtn.addEventListener("click", closeMenu);
                        overlay.addEventListener("click", closeMenu);

                        function closeMenu() {
                            mobileMenu.style.left = "-100%";
                            overlay.classList.add("hidden");
                        }
                    